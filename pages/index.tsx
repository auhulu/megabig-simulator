import { Button, Container, Group, NumberInput, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { calc } from "../libs/calc";

export default function IndexPage() {
  const [entry, setEntry] = useState(1000)
  const [result, setResult] = useState()
  return (
    <Container fluid>
    <Stack align="center" justify="center">
      <Title>第1476回 MEGA BIG シミュレーター</Title>
      <Group align="end">
      <NumberInput 
        label='購入数を入力（1口300円）' 
        w={200}
        value={entry}
        onChange={setEntry} />
        <Button color='gray' onClick={()=>setResult(calc(entry))}>回す</Button>
      </Group>
      <Group>
        {entryEnList.map(a=>(
          <Button size='xs' variant='outline' color="gray" key={a[0]} onClick={()=>setEntry(a[0])}>{a[0]}口（{a[1]}）</Button>
        ))}
      </Group>
      {result && 
      <Text size='xl' fw='bold'>
        {result >= 0 ? ` おめでとう！${Math.abs(result).toLocaleString()}円得しました！！` :  `ざんねん！${Math.abs(result).toLocaleString()}円損しました！！` }
      </Text>
      }
    </Stack>
    </Container>
  );
}

const entryEnList = [
  [1,"300円"],
  [10,"3000円"],
  [100,"3万円"],
  [1000,"30万円"],
  [10000,"300万円"],
  [100000,"3000万円"],
  [1000000,"3億円"],
]