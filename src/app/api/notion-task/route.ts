import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export async function GET() {
  try {
    const dataSourceId = process.env.NOTION_PAGE_ID as string;

    const response = await notion.dataSources.query({
      data_source_id: "2a83cd92-815b-8032-a151-000b75d9dece",
    });

    const tasks = response.results.map((task: any) => ({
      id: task.id,
      name: task.properties.Name.title[0]?.plain_text,
      status: task.properties.Status.status.name,
      checked: task.properties.check.checkbox,
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
