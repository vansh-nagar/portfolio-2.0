import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export async function GET() {
  try {
    const dataSourceId = process.env.NOTION_PAGE_ID as string;
    const todayStr = new Date().toISOString().split("T")[0];

    const response = await notion.dataSources.query({
      data_source_id: "2a83cd92-815b-8032-a151-000b75d9dece",
    });

    const tasks = response.results
      .filter((task: any) => {
        const dateProp = task.properties.Date?.date?.start;
        if (!dateProp) return false; // skip tasks without a date
        return dateProp.split("T")[0] === todayStr; // only today
      })
      .map((task: any) => ({
        id: task.id,
        name: task.properties.Name.title[0]?.plain_text || "",
        status: task.properties.Status.status?.name || null,
        checked: task.properties.check.checkbox ?? false,
        selected: task.properties.Select.select?.name || null,
        date: task.properties.Date.date?.start || null,
      }));

    return NextResponse.json(tasks);
  } catch (error: any) {
    console.error("Notion fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Notion data", details: error.message },
      { status: 500 }
    );
  }
}
