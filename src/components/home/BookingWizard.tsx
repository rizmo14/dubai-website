"use client";

import { useState, useCallback } from "react";
import { SERVICES, LOCATIONS, COMPANY } from "@/lib/data";

type Step = 1 | 2 | 3 | 4;

const TIMESLOTS = [
  { id: "morning",   label: "Morning",   sub: "8 AM – 12 PM", icon: "🌅" },
  { id: "afternoon", label: "Afternoon", sub: "12 PM – 5 PM",  icon: "☀️" },
  { id: "evening",   label: "Evening",   sub: "5 PM – 8 PM",   icon: "🌆" },
];

function getDays() {
  const days: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

type Props = {
  prefillService?: string;
  compact?: boolean;
};

export default function BookingWizard({ prefillService, compact = false }: Props) {
  const [step, setStep]               = useState<Step>(1);
  const [selectedService, setService] = useState(prefillService ?? "");
  const [selectedDate, setDate]       = useState<string>("");
  const [selectedTime, setTime]       = useState("");
  const [form, setForm]               = useState({ name: "", phone: "", area: "" });
  const [submitting, setSubmitting]   = useState(false);

  const days = getDays();

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitting(true);

    // GA4 event
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error gtag global
      window.gtag("event", "booking_request", {
        event_category: "conversion",
        event_label: selectedService,
      });
    }

    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setStep(4);
  };

  const whatsappConfirm = `https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi! I just submitted a booking request for ${selectedService} on ${selectedDate} (${selectedTime}). My name is ${form.name}, phone: ${form.phone}.`
  )}`;

  // ── Step indicators ────────────────────────────────────────────────────────
  const StepDots = () => (
    <div className="flex items-center justify-center gap-2 mb-5">
      {([1, 2, 3] as const).map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step === s
                ? "bg-brand-pink text-white scale-110"
                : step > s
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step > s ? "✓" : s}
          </div>
          {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-green-500" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  );

  // ── Step 1 — Pick service ──────────────────────────────────────────────────
  if (step === 1) return (
    <div className={compact ? "" : "w-full"}>
      <StepDots />
      <h3 className="text-center font-bold text-brand-dark text-base mb-4">
        What needs cleaning?
      </h3>
      <div className="grid grid-cols-2 gap-2 mb-5">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setService(s.shortTitle)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-center ${
              selectedService === s.shortTitle
                ? "border-brand-pink bg-brand-light shadow-sm"
                : "border-gray-100 bg-white hover:border-brand-pink/40"
            }`}
          >
            <span className="text-2xl">{s.icon}</span>
            <span className={`text-xs font-semibold leading-tight ${selectedService === s.shortTitle ? "text-brand-purple" : "text-brand-dark"}`}>
              {s.shortTitle}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setStep(2)}
        disabled={!selectedService}
        className="w-full bg-brand-pink hover:bg-brand-pink-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
      >
        Next → Choose Date
      </button>
    </div>
  );

  // ── Step 2 — Pick date + time ──────────────────────────────────────────────
  if (step === 2) return (
    <div className={compact ? "" : "w-full"}>
      <StepDots />
      <h3 className="text-center font-bold text-brand-dark text-base mb-4">
        When do you need it?
      </h3>

      {/* Calendar strip */}
      <div className="overflow-x-auto pb-2 mb-4 -mx-1">
        <div className="flex gap-2 px-1 min-w-max">
          {days.map((d) => {
            const key = d.toISOString().split("T")[0];
            const isToday = d.toDateString() === new Date().toDateString();
            const isSelected = selectedDate === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setDate(key)}
                className={`flex flex-col items-center min-w-[46px] py-2.5 px-2 rounded-xl border-2 transition-all ${
                  isSelected
                    ? "border-brand-pink bg-brand-light shadow-sm"
                    : "border-gray-100 bg-white hover:border-brand-pink/40"
                }`}
              >
                <span className={`text-[10px] font-medium ${isSelected ? "text-brand-pink" : "text-gray-400"}`}>
                  {isToday ? "Today" : DAY_NAMES[d.getDay()]}
                </span>
                <span className={`text-lg font-bold leading-tight ${isSelected ? "text-brand-purple" : "text-brand-dark"}`}>
                  {d.getDate()}
                </span>
                <span className={`text-[10px] ${isSelected ? "text-brand-pink" : "text-gray-400"}`}>
                  {MONTH_NAMES[d.getMonth()]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {TIMESLOTS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTime(t.label)}
            className={`flex flex-col items-center gap-1 py-3 rounded-xl border-2 transition-all ${
              selectedTime === t.label
                ? "border-brand-pink bg-brand-light shadow-sm"
                : "border-gray-100 bg-white hover:border-brand-pink/40"
            }`}
          >
            <span className="text-xl">{t.icon}</span>
            <span className={`text-xs font-bold ${selectedTime === t.label ? "text-brand-purple" : "text-brand-dark"}`}>
              {t.label}
            </span>
            <span className="text-[10px] text-gray-400">{t.sub}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-brand-dark font-semibold py-3.5 rounded-xl transition-colors text-sm"
        >
          ← Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={!selectedDate || !selectedTime}
          className="flex-[2] bg-brand-pink hover:bg-brand-pink-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
        >
          Next → Your Details
        </button>
      </div>
    </div>
  );

  // ── Step 3 — Contact details ───────────────────────────────────────────────
  if (step === 3) return (
    <div className={compact ? "" : "w-full"}>
      <StepDots />
      <h3 className="text-center font-bold text-brand-dark text-base mb-1">
        Almost done!
      </h3>
      <p className="text-center text-xs text-gray-500 mb-4">
        We&apos;ll confirm via WhatsApp within 30 mins
      </p>

      {/* Summary pill */}
      <div className="flex items-center gap-2 bg-brand-light rounded-xl px-3 py-2.5 mb-4 text-xs">
        <span className="text-brand-pink font-semibold">{selectedService}</span>
        <span className="text-gray-400">·</span>
        <span className="text-brand-gray">{selectedDate}</span>
        <span className="text-gray-400">·</span>
        <span className="text-brand-gray">{selectedTime}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={handleFormChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone / WhatsApp (+971…)"
          value={form.phone}
          onChange={handleFormChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink"
        />
        <select
          name="area"
          value={form.area}
          onChange={handleFormChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-brand-dark text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink"
        >
          <option value="">Select your area in Dubai</option>
          {LOCATIONS.map((l) => (
            <option key={l.id} value={l.name}>{l.name}</option>
          ))}
          <option value="Other">Other Dubai area</option>
        </select>

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-brand-dark font-semibold py-3.5 rounded-xl transition-colors text-sm"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={submitting || !form.name || !form.phone}
            className="flex-[2] bg-green-500 hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
          >
            {submitting ? (
              <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending…</>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm Booking
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );

  // ── Step 4 — Confirmation ──────────────────────────────────────────────────
  return (
    <div className="text-center py-2">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-bold text-brand-dark text-lg mb-1">Booking Requested!</h3>
      <p className="text-sm text-gray-500 mb-1">
        We&apos;ll WhatsApp <span className="font-semibold text-brand-dark">{form.phone}</span> within 30 mins
      </p>
      <p className="text-xs text-gray-400 mb-5">
        {selectedService} · {selectedDate} · {selectedTime}
      </p>
      <a
        href={whatsappConfirm}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm w-full justify-center"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Message Us on WhatsApp
      </a>
      <button
        type="button"
        onClick={() => { setStep(1); setService(""); setDate(""); setTime(""); setForm({ name: "", phone: "", area: "" }); }}
        className="mt-3 text-xs text-gray-400 hover:text-brand-pink transition-colors underline block w-full"
      >
        Make another booking
      </button>
    </div>
  );
}
