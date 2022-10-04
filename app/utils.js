export const getClient = async () => {
  const { init } = await import('@findify/sdk')
  try {
    return init({
      key: 'process.env.NEXT_PUBLIC_FINDIFY_KEY',
      user: ''
    })
  } catch(error) {
    console.error(error)
    return undefined
  }
}