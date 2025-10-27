import { Button } from "@/components/ui/button";
import { BotMessageSquare } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ChatWithAi = () => {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <BotMessageSquare />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>hi</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChatWithAi;
