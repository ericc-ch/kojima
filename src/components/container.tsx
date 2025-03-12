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

        <button class="btn" onclick="my_modal_1.showModal()">
          open modal
        </button>
        <dialog class="modal" id="my_modal_1">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <textarea
          class="textarea mt-auto w-full resize-none"
          placeholder="Chat with Kojima"
        ></textarea>
      </div>
    </main>
  )
}
