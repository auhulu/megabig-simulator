import { Button, Container, Group, NumberInput, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { calc } from "../libs/calc";

export default function IndexPage() {
  const [entry, setEntry] = useState<string | number>(1000)
  const [result, setResult] = useState<number | undefined>()
  const message = !result ? "" :  result >= 0 ? ` おめでとう！${Math.abs(result).toLocaleString()}円得しました！！` : `ざんねん！${Math.abs(result).toLocaleString()}円損しました！！` 
  return (
    <Container fluid>
      <Stack align="center" justify="center">
        <Title order={1} size='h4'>第1476回 MEGA BIG シミュレーター</Title>
        <Group align="end"> 
          <NumberInput 
            label='購入数を入力（1口300円）' 
            w={200}
            value={entry}
            onChange={setEntry} />
            <Button color='gray' onClick={()=>setResult(calc(entry as number))}>回す</Button>
          </Group>
        <Group>
          {entryEnList.map(a=>(
            <Button size='compact-xs' variant='outline' color="gray" key={a.entry} onClick={()=>setEntry(a.entry)}>{a.entry}口（{a.en}）</Button>
          ))}
        </Group>
        {result && 
        <Text size='lg' fw='bold'>
          {message}
        </Text>
        }
        {result && 
        <Button
          color='black'
          component='a'
          href={`https://twitter.com/intent/tweet?&url=https://megabig.nwnwn.com&hashtags=MEGABIGシミュレーター&text=${message}`}
        >
          𝕏に結果を投稿
        </Button>
        }
      </Stack>
    </Container>
  );
}

const entryEnList = [
  {entry: 1, en:"300円"},
  {entry: 10, en:"3000円"},
  {entry: 100, en:"3万円"},
  {entry: 1000, en:"30万円"},
  {entry: 10000, en:"300万円"},
  {entry: 100000, en:"3000万円"},
  {entry: 1000000, en:"3億円"},
]