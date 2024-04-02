<template>
  <h1>Theme preview page</h1>
  <section>
    <h2>Colors</h2>
    <div class="wrapper">
      <div class="block bg-background border">background</div>
      <div class="block bg-bgalt">alt bg</div>
      <div class="block bg-bgaccent">accent bg</div>
      <div class="block bg-primary-100">primary-100</div>
      <div class="block bg-primary">primary</div>
      <div class="block bg-primary-900">primary-900</div>
      <div class="block bg-secondary-100">secondary-100</div>
      <div class="block bg-secondary">secondary</div>
      <div class="block bg-secondary-900">secondary-900</div>
      <div class="block bg-accent-100">accent-100</div>
      <div class="block bg-accent">accent</div>
      <div class="block bg-accent-900">accent-900</div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
  </section>
  <section>
    <h2>This is a Heading</h2>
    <h3>This is a Heading</h3>
    <h4>This is a Heading</h4>
    <h5>This is a Heading</h5>
    <p>This is a paragraph.</p>
    <p><code>this is code</code></p>

    <p><a href="https://www.example.com">This is a link</a></p>
  </section>

  <section>
    <h2>Unordered lists</h2>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
  </section>
  <section>
    <h2>Ordered lists</h2>

    <ol>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ol>
  </section>
  <section>
    <h2>Table</h2>

    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>Inputs</h2>

    <section>
      <div>
        <label for="input-text">Input Text:</label>
      </div>
      <input type="text" id="input-text" name="input-text" />
    </section>
    <label>Input Radio:</label><br />
    <input type="radio" id="input-radio1" name="input-radio" value="radio1" /><label
      for="input-radio1"
      >Radio 1</label
    ><br />
    <input type="radio" id="input-radio2" name="input-radio" value="radio2" /><label
      for="input-radio2"
      >Radio 2</label
    ><br />
    <div>
      <label for="input-checkbox">Input Checkbox:</label><br />
      <input type="checkbox" id="input-checkbox" name="input-checkbox" value="checkbox1" />Checkbox
      1<br />
      <input
        type="checkbox"
        checked
        id="input-checkbox"
        name="input-checkbox"
        value="checkbox2"
      />Checkbox 2<br />
    </div>
    <button>Button</button>
    <button outline>outline</button>
    <button cancel>cancel</button>
    <button submit>submit</button>
  </section>
  <section>
    <h2>Combination elements</h2>
    <section>
      <button>add</button>
      <input type="text" class="width-2" />
      <button>subtract</button>
    </section>
    <section>
      <span type="text" class="input width-10" contenteditable></span>
      <button>subtract</button>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.block {
  aspect-ratio: 1/1;
  border-radius: var(--border-radius);
}
.border {
  border: 1px solid var(--primary);
}
.bg-background {
  background-color: var(--background);
}
.bg-bgalt {
  background-color: var(--background-alt);
}
.bg-bgaccent {
  background-color: var(--background-accent);
}
.bg-primary-900 {
  background-color: var(--primary-900);
}
.bg-primary {
  background-color: var(--primary);
}
.bg-primary-100 {
  background-color: var(--primary-100);
}
.bg-secondary-900 {
  background-color: var(--secondary-900);
}
.bg-secondary {
  background-color: var(--secondary);
}
.bg-secondary-100 {
  background-color: var(--secondary-100);
}
.bg-accent-900 {
  background-color: var(--accent-900);
}
.bg-accent {
  background-color: var(--accent);
}
.bg-accent-100 {
  background-color: var(--accent-100);
}
.bg-background {
  background-color: var(--background);
}
.bg-background {
  background-color: var(--background);
}

.wrapper:has(.block) {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}
section {
  margin-bottom: 15px;
}
</style>
