import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Btn } from "./Button";

const GRADE_OPTIONS = [
  "Playgroup", "Nursery", "Junior KG", "Senior KG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
];

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-3 font-display text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your enquiry. Our admissions team will reach out within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
    onSubmit={async (e) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const data = {
        parent_name: formData.get("parent"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        child_name: formData.get("child"),
        grade: formData.get("grade"),
        visit_date: formData.get("visitDate") || null,
        city: formData.get("city"),
        message: formData.get("message"),
      };

      try {
        const response = await fetch("https://themillennialschool.onrender.com/api/enquiry/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          const error = await response.json();
          console.error(error);
          alert("Failed to submit enquiry.");
        }
      } catch (err) {
        console.error(err);
        alert("Could not connect to the server.");
      }
    }}
      className={`rounded-2xl border border-border bg-card ${compact ? "p-5" : "p-6 md:p-8"}`}
    >
      <h3 className="font-display text-xl md:text-2xl font-semibold">Admission Enquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Share a few details and we'll get back the same working day.
      </p>
      <div className={`mt-5 grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field label="Parent name" name="parent" required />
        <Field label="Phone number" name="phone" type="tel" required />
        <Field label="Parent email address" name="email" type="email" />
        <Field label="Child's name" name="child" required />
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-foreground mb-1.5">
            Grade applying for <span className="text-tangerine">*</span>
          </label>
          <select
            id="grade"
            name="grade"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:border-primary outline-none"
          >
            <option value="" disabled>Select a grade</option>
            {GRADE_OPTIONS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <Field label="Preferred date for school visit" name="visitDate" type="date" />
        <Field label="City / locality" name="city" placeholder="e.g. Nashik" />
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="msg" className="block text-sm font-medium text-foreground mb-1.5">
            Message <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            id="msg"
            name="message"
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:border-primary outline-none"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Btn type="submit" variant="apply">
          <Send className="h-4 w-4" /> Submit Enquiry
        </Btn>
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted by our admissions team.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required ? <span className="text-tangerine"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:border-primary outline-none"
      />
    </div>
  );
}