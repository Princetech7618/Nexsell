"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Report Issue Page for Nexsell (OLX-like)
// - Large content
// - Animated, hover interactions
// - Responsive for all devices
// - Distinct, modern design (split layout + cards + form + list)

export default function ReportIssue() {
  const [form, setForm] = useState({
    issueType: "Fraud / Scam",
    title: "",
    description: "",
    contact: "",
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [issuesList, setIssuesList] = useState([]);
  const [query, setQuery] = useState("");
  const fileRef = useRef(null);

  function handleFileChange(e) {
    const selected = Array.from(e.target.files).slice(0, 5);
    const mapped = selected.map((f) => ({ file: f, url: URL.createObjectURL(f) }));
    setFiles(mapped);
  }

  function removeFile(idx) {
    const copy = [...files];
    URL.revokeObjectURL(copy[idx].url);
    copy.splice(idx, 1);
    setFiles(copy);
  }

  function submitReport(e) {
    e.preventDefault();
    if (!form.title || !form.description) {
      setSuccess({ ok: false, message: "Please fill the required fields (title and description)." });
      return;
    }
    setSubmitting(true);
    setSuccess(null);

    // Mock API call
    setTimeout(() => {
      const newIssue = {
        id: Date.now(),
        type: form.issueType,
        title: form.title,
        description: form.description,
        contact: form.contact,
        attachments: files.map((f) => f.url),
        createdAt: new Date().toLocaleString(),
        status: "Received",
      };
      setIssuesList((s) => [newIssue, ...s]);
      setForm({ issueType: "Fraud / Scam", title: "", description: "", contact: "" });
      setFiles([]);
      if (fileRef.current) fileRef.current.value = null;
      setSubmitting(false);
      setSuccess({ ok: true, message: "Thank you — your report has been submitted." });
    }, 900);
  }

  const filtered = issuesList.filter((it) => (query ? (it.title + it.type + it.description).toLowerCase().includes(query.toLowerCase()) : true));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* LEFT: Hero + Guidance */}
        <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="rounded-3xl p-8 shadow-lg bg-white border border-gray-100">
            <h1 className="text-5xl font-serif mb-2">Report an Issue</h1>
            <p className="text-sm text-gray-600 leading-relaxed">If you encounter suspicious activity, a fraud, or a listing that violates our rules, please report it here. Provide as much detail as possible — this helps our team act fast.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard title="Immediate Help" subtitle="Call support: +91 8000 000 000" />
              <FeatureCard title="Safe Meetups" subtitle="Find police safe-exchange zones near you" />
              <FeatureCard title="Policy Violations" subtitle="Hate content, illegal items, impersonation" />
              <FeatureCard title="Payment Issues" subtitle="Fake confirmations, non-payment, chargebacks" />
            </div>

            <div className="mt-6 text-xs text-gray-500">Tip: screenshots, chat logs and receipts help speed up investigations.</div>
          </div>

          {/* Illustration / Image */}
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-md border border-gray-100">
            <img src="/img/Reportissue.jpg" alt="report-safety" className="w-full h-56 object-cover" />
          </motion.div>

          <div className="rounded-2xl p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-100">
            <h3 className="text-sm font-semibold text-indigo-700">How we handle reports</h3>
            <ol className="mt-3 text-sm text-gray-600 space-y-2 list-decimal list-inside">
              <li>Receive & triage — we prioritise high-risk reports.</li>
              <li>Investigate — our trust team reviews evidence.</li>
              <li>Action — remove listing, warn or ban accounts as needed.</li>
              <li>Feedback — we'll update you if you provided contact details.</li>
            </ol>
          </div>
        </motion.aside>

        {/* RIGHT: Form + Reports list */}
        <motion.main initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">

          {/* Form Card */}
          <div className="bg-white shadow-lg rounded-3xl p-6 border border-gray-100">
            <form onSubmit={submitReport} className="space-y-4">
              <div className="flex gap-3 flex-col md:flex-row">
                <label className="flex-1">
                  <div className="text-xs text-gray-600 mb-1">Issue Type</div>
                  <select value={form.issueType} onChange={(e) => setForm((s) => ({ ...s, issueType: e.target.value }))} className="w-full rounded-lg border p-3 text-sm">
                    <option>Fraud / Scam</option>
                    <option>Inappropriate Listing</option>
                    <option>Spam</option>
                    <option>Payment Issue</option>
                    <option>Impersonation</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="flex-1">
                  <div className="text-xs text-gray-600 mb-1">Contact (optional)</div>
                  <input value={form.contact} onChange={(e) => setForm((s) => ({ ...s, contact: e.target.value }))} placeholder="Email or phone" className="w-full rounded-lg border p-3 text-sm" />
                </label>
              </div>

              <label>
                <div className="text-xs text-gray-600 mb-1">Short Title</div>
                <input value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} placeholder="e.g. Fake payment confirmation" className="w-full rounded-lg border p-3 text-sm" />
              </label>

              <label>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600 mb-1">Description</div>
                  <div className="text-xs text-gray-400">{form.description.length}/1200</div>
                </div>
                <textarea value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} rows={6} placeholder="Detail what happened, include usernames, listing links, timestamps..." className="w-full rounded-lg border p-3 text-sm" maxLength={1200} />
              </label>

              <div>
                <div className="text-xs text-gray-600 mb-1">Attachments (optional, max 5)</div>
                <div className="flex gap-3 items-center">
                  <input ref={fileRef} onChange={handleFileChange} type="file" accept="image/*,application/pdf" multiple className="hidden" />
                  <button type="button" onClick={() => fileRef.current && fileRef.current.click()} className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700">Upload files</button>
                  <div className="text-sm text-gray-500">PNG, JPG, PDF — max 5 files</div>
                </div>

                {files.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {files.map((f, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden border">
                        <img src={f.url} alt="attachment" className="w-full h-24 object-cover" />
                        <button type="button" onClick={() => removeFile(idx)} className="absolute top-1 right-1 bg-white/80 text-gray-800 rounded-full p-1">✕</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" disabled={submitting} className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow">{submitting ? 'Submitting...' : 'Submit Report'}</button>

                <button type="button" onClick={() => { setForm({ issueType: 'Fraud / Scam', title: '', description: '', contact: '' }); setFiles([]); if (fileRef.current) fileRef.current.value = null; }} className="px-4 py-2 rounded-2xl border">Reset</button>

                {success && (
                  <div className={`text-sm ${success.ok ? 'text-green-600' : 'text-red-600'}`}>{success.message}</div>
                )}
              </div>
            </form>
          </div>

          {/* Reports List */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
    
    {/* Title */}
    <h3 className="text-lg font-semibold whitespace-nowrap">
      Submitted Reports
    </h3>

    {/* Search Bar */}
    <input
      placeholder="Search reports..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="text-sm border rounded-lg px-3 py-2 w-full sm:w-60 md:w-72"
    />
  </div>

  {filtered.length === 0 ? (
    <div className="p-8 text-center text-gray-500">
      No reports yet. Submit a report to see it here.
    </div>
  ) : (
    <div className="space-y-3">
      {filtered.map((it) => (
        <motion.div
          key={it.id}
          whileHover={{ scale: 1.01 }}
          className="p-3 rounded-xl border bg-gray-50 flex flex-col sm:flex-row items-start gap-3"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-semibold">
            {it.type.split(' ')[0][0]}
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-xs text-gray-500">
                  {it.type} • {it.createdAt}
                </div>
              </div>

              <div className="text-sm text-indigo-600">{it.status}</div>
            </div>

            <div className="mt-2 text-sm text-gray-700">
              {it.description.slice(0, 200)}
              {it.description.length > 200 ? '...' : ''}
            </div>

            {it.attachments?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {it.attachments.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="att"
                    className="w-20 h-14 object-cover rounded-md border"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )}
</div>


        </motion.main>
      </div>
    </div>
  );
}


function FeatureCard({ title, subtitle }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-sm font-semibold text-indigo-700">{title}</div>
      <div className="text-xs text-gray-600 mt-1">{subtitle}</div>
    </div>
  );
}
