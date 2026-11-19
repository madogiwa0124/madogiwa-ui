import { MBtn } from "../src";

export const App = () => (
  <main>
    <h1>Madogiwa UI React</h1>
    <section>
      <h2>MBtn</h2>
      <MBtn variant="primary">Primary</MBtn>
      <MBtn variant="secondary" outline>
        Secondary outline
      </MBtn>
      <MBtn block rounded>
        Block Rounded
      </MBtn>
      <MBtn rounded iconOnly>
        ❤️
      </MBtn>
      <MBtn rounded transition>
        Rounded Transition
      </MBtn>
    </section>
  </main>
);
