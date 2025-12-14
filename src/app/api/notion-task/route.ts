import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export async function GET() {
  try {
    const todayStr = new Date().toISOString().split("T")[0];

    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_SOURCE_ID as string,
    });

    console.log("Notion response:", response);

    const tasks = response.results
      .filter((task: any) => {
        const dateProp = task.properties.Date?.date?.start;
        if (!dateProp) return false; // skip tasks without a date
        return dateProp.split("T")[0] === todayStr; // only today
      })
      .map((task: any) => ({
        id: task.id,
        name: task.properties?.Name?.title?.[0]?.plain_text ?? "",
        status: task.properties?.Status?.status?.name ?? null,
        checked: task.properties?.check?.checkbox ?? false,
        private: task.properties?.private?.checkbox ?? false,
        date: task.properties?.Date?.date?.start ?? null,
      }));

    console.log("Filtered tasks for today:", tasks);

    return NextResponse.json(tasks);
  } catch (error: any) {
    console.error("Notion fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Notion data", details: error.message },
      { status: 500 }
    );
  }
}
