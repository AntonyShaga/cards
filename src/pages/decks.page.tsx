import { useState } from 'react'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'
import {
  useCreateDeskMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/flashcards-api'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })
  const [createDeck, deckCreationStatus] = useCreateDeskMutation()

  console.log(data)
  console.log(deckCreationStatus)
  const { data: deckByIdData, refetch } = useGetDeckByIdQuery({ id: 'clyso0emw01eqo701xku5rhhm' })

  console.log(' deckByIdData: ', deckByIdData)
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <>
      <Input onChange={e => setSearch(e.currentTarget.value)} value={search} />
      <button onClick={refetch} type={'button'}>
        refetch
      </button>
      <button onClick={() => createDeck({ name: 'new Deck' })} type={'button'}>
        stcyko
      </button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Table>
          <TableHead>
            <tr>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Cards</TableHeadCell>
              <TableHeadCell>Last Updated</TableHeadCell>
              <TableHeadCell>Created By</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody>
            {data?.items.map(deck => {
              const updatedAt = new Date(deck.updated).toLocaleDateString('ru-RU')

              return (
                <TableRow key={deck.id}>
                  <TableCell>{deck.name}</TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>{updatedAt}</TableCell>
                  <TableCell>{deck.author.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
