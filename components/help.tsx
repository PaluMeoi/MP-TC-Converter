import { useDisclosure } from "@mantine/hooks";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Button,
  Modal,
} from "@mantine/core";

const helpContent = [
  {
    emoji: "🎨",
    question: "Why are my dyes wrong?",
    answer:
      "MakePlace doesn’t actually save the dye that’s used, but a color value. To find a dye the tool finds the closest dye to that value and while rare (and usually with older designs), it’s possible that it gets it wrong sometimes. ",
  },
  {
    emoji: "💾",
    question: "Is my design saved?",
    answer:
      "No. All processing is done in your browser on your own device. The file never leaves your device and isn't saved. ",
  },
  {
    emoji: "🔗",
    question: "Why is the Teamcraft link so long?",
    answer:
      "Every item and its quantity is encoded into the link, for only a few items this wouldn’t be too long but for a Mansion it can be longer than a dhalmel’s neck.",
  },
];

export default function Help() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Help" size="xl">
        <Accordion variant="contained" radius="md">
          {helpContent.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionControl icon={faq.emoji}>
                {faq.question}
              </AccordionControl>
              <AccordionPanel>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Modal>
      <Button onClick={open} variant="light" color="cyan">
        Help
      </Button>
    </>
  );
}
