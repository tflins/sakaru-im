import { ref, withKeys } from 'vue'

const messages = ref<string[]>([])
const content = ref('')

const handleSendMsg = () => {
  if (content.value === '') return
  messages.value.push(content.value)
  content.value = ''
}

export default function App() {
  return (
    <>
      <ul> {messages.value.map(msg => <li>{msg}</li>)}</ul>
      <input type="text" v-model={content.value} onKeydown={withKeys(handleSendMsg, ['enter'])} />
    </>
  )
}
