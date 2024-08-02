"use client";

import { Button, FileInput, Group, Loader, rem, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { Tally } from "../lib/types";
import { tallyItems } from "../lib/itemTally";
import { IconFileSmile } from "@tabler/icons-react";
import Help from "../components/help";

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [tcUrl, setTcUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (file !== null) {
      setLoading(true);
      const loadConvert = async () => {
        try {
          const text = await file?.text();
          const mpData = JSON.parse(text!);
          const tally = tallyItems(mpData);
          setTcUrl(convertToTC(tally));
          setError(undefined);
          setLoading(false);
        } catch (e) {
          setError("Could not parse file");
          setTcUrl(undefined);
          setLoading(false);
        }
      };

      loadConvert();
    } else {
      setTcUrl(undefined);
      setError(undefined);
    }
  }, [file]);

  function loadFile(fileData: File | null) {
    if (fileData === null) {
      setTcUrl(undefined);
      setFile(null);
      return;
    }
    setFile(fileData);
  }

  function convertToTC(tally: Tally) {
    return `https://ffxivteamcraft.com/import/${btoa(
      Object.entries(tally)
        .map((id) => `${id[0]},null,${id[1]}`)
        .join(";"),
    )}`;
  }

  const icon = <IconFileSmile style={{ width: rem(18), height: rem(18) }} />;

  return (
    <Stack justify="center" align="center">
      <Group justify="center">
        <FileInput
          label="MakePlace File"
          clearable
          value={file}
          onChange={loadFile}
          accept="application/json"
          error={error}
          leftSection={loading ? <Loader size={18} /> : icon}
          placeholder="Select File"
          inputContainer={(children) => (
            <Group align="flex-start">
              <Stack style={{ width: 250 }}>{children}</Stack>
              {tcUrl == undefined || file === null ? (
                <Button disabled>Open in Teamcraft</Button>
              ) : (
                <Button component="a" href={tcUrl}>
                  Open in Teamcraft
                </Button>
              )}
            </Group>
          )}
        />
      </Group>
      <Stack justify="center" align="center" pt="xl">
        <Help />
      </Stack>
    </Stack>
  );
}
