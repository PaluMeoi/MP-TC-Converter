import {
  DropzoneAccept,
  DropzoneFullScreen,
  DropzoneIdle,
  DropzoneReject,
  FileWithPath,
} from "@mantine/dropzone";
import { Group, rem, Text } from "@mantine/core";
import { IconFileSmile, IconFileUpload, IconX } from "@tabler/icons-react";

export default function MpDropzone(props: {
  onDrop: (files: FileWithPath[]) => void;
}) {
  return (
    <DropzoneFullScreen
      onDrop={props.onDrop}
      accept={["application/json"]}
      style={{ pointerEvents: "none" }}
    >
      <Group justify="center" gap="xl" pt="xl">
        <DropzoneAccept>
          <IconFileUpload
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-blue-6)",
            }}
            stroke={1.5}
          />
        </DropzoneAccept>
        <DropzoneReject>
          <IconX
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-red-6)",
            }}
            stroke={1.5}
          />
        </DropzoneReject>
        <DropzoneIdle>
          <IconFileSmile
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-dimmed)",
            }}
            stroke={1.5}
          />
        </DropzoneIdle>
        <div>
          <Text size="xl" inline>
            Drag and drop MakePlace JSON files here to load
          </Text>
        </div>
      </Group>
    </DropzoneFullScreen>
  );
}
