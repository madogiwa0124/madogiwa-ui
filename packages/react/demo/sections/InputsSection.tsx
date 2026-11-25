import { type CSSProperties, type SubmitEvent, useState } from "react";
import { MBtn, MCheckbox, MH2, MH3, MInput, MLabel, MP, MRadio, MSelect, MTextarea, MToggle } from "../../src";

const field: CSSProperties = { display: "grid", gap: "var(--spacing-1)" };
const inlineLabel: CSSProperties = { display: "inline-flex", alignItems: "center", gap: "var(--spacing-1)" };
const stack: CSSProperties = { display: "flex", flexDirection: "column", gap: "var(--spacing-2)" };

const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();
  event.currentTarget.reportValidity();
};

export const InputsSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("basic");
  const [option, setOption] = useState("option1");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <MH2>MInputs</MH2>
      <div>
        <MH3>Sample Form</MH3>
        <form
          style={{ padding: "var(--spacing-4)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", gap: "var(--spacing-3)", maxWidth: "520px" }}
          onSubmit={handleSubmit}
        >
          <div style={field}>
            <MLabel htmlFor="form-name" required>Name</MLabel>
            <MInput id="form-name" value={name} onChange={(event) => { setName(event.target.value); }} block transition placeholder="John Doe" required />
          </div>
          <div style={field}>
            <MLabel htmlFor="form-address" disabled>Address</MLabel>
            <MInput id="form-address" block transition placeholder="123 Main St" disabled />
          </div>
          <div style={field}>
            <MLabel htmlFor="form-email">Email</MLabel>
            <MInput id="form-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); }} block transition placeholder="you@example.com" required />
          </div>
          <div style={field} role="group" aria-labelledby="form-plan-label">
            <MLabel id="form-plan-label">Plan</MLabel>
            <div style={{ display: "flex", gap: "var(--spacing-4)", alignItems: "center" }}>
              {["basic", "pro"].map(value => (
                <MLabel key={value} style={inlineLabel}>
                  <MRadio name="plan" value={value} checked={plan === value} onChange={(event) => { setPlan(event.target.value); }} />
                  {value === "basic" ? "Basic" : "Pro"}
                </MLabel>
              ))}
            </div>
          </div>
          <div style={field}>
            <MLabel htmlFor="form-category">Category</MLabel>
            <MSelect id="form-category" value={category} onChange={(event) => { setCategory(event.target.value); }}>
              <option value="" disabled>Please select one</option>
              <optgroup label="General">
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
              </optgroup>
              <optgroup label="Other">
                <option value="other">Other</option>
              </optgroup>
            </MSelect>
          </div>
          <div style={field}>
            <MLabel htmlFor="form-message">Message</MLabel>
            <MTextarea id="form-message" value={message} onChange={(event) => { setMessage(event.target.value); }} block autoFit placeholder="Tell us more..." rows={4} />
          </div>
          <div style={{ display: "grid", gap: "var(--spacing-2)" }}>
            <MLabel style={inlineLabel}>
              <MCheckbox checked={checked} onChange={(event) => { setChecked(event.target.checked); }} />
              Subscribe to newsletter
            </MLabel>
            <MLabel style={inlineLabel}>
              Enable notifications
              <MToggle checked={toggled} onChange={(event) => { setToggled(event.target.checked); }} />
            </MLabel>
          </div>
          <div style={{ marginTop: "var(--spacing-2)", display: "flex", gap: "var(--spacing-2)", justifyContent: "flex-end" }}>
            <MBtn type="reset" outline>Reset</MBtn>
            <MBtn variant="primary" type="submit" rounded transition>Submit</MBtn>
          </div>
        </form>
      </div>
      <div>
        <MH3>MCheckbox</MH3>
        <MLabel style={inlineLabel}>
          <MCheckbox checked={checked} onChange={(event) => { setChecked(event.target.checked); }} />
          Check me!
        </MLabel>
        <MP>{`value: ${String(checked)}`}</MP>
      </div>
      <div>
        <MH3>MRadio</MH3>
        <div style={stack}>
          {["option1", "option2"].map((value, index) => (
            <MLabel key={value} style={inlineLabel}>
              <MRadio name="options" value={value} checked={option === value} onChange={(event) => { setOption(event.target.value); }} />
              {`Option ${String(index + 1)}`}
            </MLabel>
          ))}
        </div>
        <MP>{`value: ${option}`}</MP>
      </div>
      <div>
        <MH3>MToggle</MH3>
        <MLabel style={inlineLabel}>
          Toggle me!
          <MToggle checked={toggled} onChange={(event) => { setToggled(event.target.checked); }} />
        </MLabel>
        <MP>{`value: ${String(toggled)}`}</MP>
      </div>
      <div>
        <MH3>MInput</MH3>
        <div style={stack}>
          <div>
            <MLabel htmlFor="text-input">Text Input</MLabel>
            <MInput id="text-input" value={name} onChange={(event) => { setName(event.target.value); }} block transition placeholder="Enter your name" />
          </div>
          <div>
            <MLabel htmlFor="email-input" required>Email Input</MLabel>
            <MInput id="email-input" type="email" value={email} onChange={(event) => { setEmail(event.target.value); }} block transition placeholder="your@email.com" />
          </div>
        </div>
        <MP>
          {`Text value: ${name}`}
          <br />
          {`Email value: ${email}`}
        </MP>
      </div>
      <div>
        <MH3>MSelect</MH3>
        <MLabel htmlFor="select-input">Choose an option</MLabel>
        <MSelect id="select-input" value={selected} onChange={(event) => { setSelected(event.target.value); }}>
          <option value="" disabled>Please select one</option>
          <option value="option0">Option 0</option>
          <hr />
          <optgroup label="Group 1">
            <option value="option1-1">Option 1-1</option>
            <option value="option1-2">Option 1-2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="option2-1">Option 2-1</option>
            <option value="option2-2" disabled>Option 2-2 (Disabled)</option>
          </optgroup>
          <hr />
          <option value="option3">Option 3</option>
        </MSelect>
        <MP>{`Selected value: ${selected}`}</MP>
      </div>
      <div>
        <MH3>MTextarea</MH3>
        <MLabel htmlFor="textarea-input">Your Message</MLabel>
        <MTextarea id="textarea-input" value={message} onChange={(event) => { setMessage(event.target.value); }} block autoFit placeholder="Type your message here..." rows={3} />
        <MP>{`Message: ${message}`}</MP>
      </div>
    </>
  );
};
