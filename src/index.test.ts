interface Hello {
  name: string
}

const me: Hello = {
  name: 'Marcelo',
}

it('works', () => {
  expect(me.name).toBe('Marcelo')
})
