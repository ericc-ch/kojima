export function Container() {
  return (
    <main class="bg-base-200 mx-auto h-svh w-[min(700px,90%)] px-4">
      <div class="flex h-full flex-col gap-2 py-4">
        <div class="chat chat-start">
          <div class="chat-bubble">
            It's over Anakin,
            <br />I have the high ground.
          </div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble">You underestimate my power!</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            laboriosam aliquam reiciendis perspiciatis id tempora placeat alias
            eaque inventore repellat iure praesentium quae temporibus fuga, aut
            fugit aperiam error velit.
          </div>
        </div>

        <textarea
          class="textarea mt-auto w-full resize-none"
          placeholder="Chat with Kojima"
        ></textarea>
      </div>
    </main>
  )
}
