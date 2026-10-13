import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Mail } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function ContactForm({ prefillSubject = "" }) {
  const [submissionStatus, setSubmissionStatus] = useState({
    state: 'idle', // 'idle' | 'loading' | 'success' | 'error' | 'unconfigured'
    message: '',
    ticketId: ''
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      subject: prefillSubject || 'Custom Dining & Living Furniture',
      message: '',
      consent: false,
      botcheck: '' // honeypot
    }
  });

  const onSubmit = async (data) => {
    // Spam protection: check honeypot
    if (data.botcheck) {
      console.warn("Spam bot detected.");
      return;
    }

    setSubmissionStatus({ state: 'loading', message: '', ticketId: '' });

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    // Real backend submission when endpoint is supplied
    if (endpoint && endpoint.trim().length > 0) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: data.fullName,
            email: data.email,
            phone: data.phone,
            company: data.companyName,
            subject: data.subject,
            message: data.message,
            submittedAt: new Date().toISOString()
          })
        });

        if (response.ok) {
          const generatedId = `DWW-${Math.floor(100000 + Math.random() * 900000)}`;
          setSubmissionStatus({
            state: 'success',
            message: 'Your inquiry has been successfully transmitted to our master carpenter. We will review your blueprints and contact you within 4 business hours.',
            ticketId: generatedId
          });
          reset();
        } else {
          const errData = await response.json().catch(() => ({}));
          setSubmissionStatus({
            state: 'error',
            message: errData.message || `Server error (${response.status}). Please call us directly at ${companyInfo.phone}.`,
            ticketId: ''
          });
        }
      } catch (err) {
        setSubmissionStatus({
          state: 'error',
          message: `Network transmission failed: ${err.message}. Please reach out directly via phone or WhatsApp.`,
          ticketId: ''
        });
      }
    } else {
      // Backend not yet configured in environment variables
      // Prompt user transparently per prompt requirement
      setSubmissionStatus({
        state: 'unconfigured',
        message: 'No live form submission endpoint found in VITE_CONTACT_FORM_ENDPOINT. You can submit directly via WhatsApp or your default email client below.',
        ticketId: `DRAFT-${Date.now().toString().slice(-6)}`
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl relative">
      
      {/* Success Notification */}
      {submissionStatus.state === 'success' && (
        <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-fadeIn">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-lg font-bold text-emerald-950 mb-1">
                Inquiry Successfully Received
              </h3>
              <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                {submissionStatus.message}
              </p>
              <div className="inline-block bg-white px-3 py-1 rounded-lg border border-emerald-300 text-xs font-mono font-semibold text-emerald-900">
                Inquiry Ref: {submissionStatus.ticketId}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unconfigured Backend Notification & Fallback options */}
      {submissionStatus.state === 'unconfigured' && (
        <div className="mb-8 p-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 animate-fadeIn">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-amber-900">
                Live Backend Endpoint Integration Notice
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed">
                As specified in the project requirements, form submissions require a connected server endpoint. Please configure <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-amber-950">VITE_CONTACT_FORM_ENDPOINT</code> in your <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-amber-950">.env</code> file (e.g. Formspree, Web3Forms, or custom REST API).
              </p>
              <p className="text-xs font-medium text-stone-700">
                In the meantime, you can contact the workshop directly:
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${companyInfo.phoneRaw}?text=Hello%20Dilip%20Wood%20Works,%20I%20would%20like%20to%20inquire%20about%20a%20woodworking%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp ({companyInfo.phone})</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}?subject=Project%20Inquiry%20-%20Dilip%20Wood%20Works`}
                  className="inline-flex items-center space-x-1.5 bg-stone-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-stone-900 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email ({companyInfo.email})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {submissionStatus.state === 'error' && (
        <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start space-x-3 text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <span>{submissionStatus.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Honeypot field for bot spam detection */}
        <input
          type="text"
          {...register("botcheck")}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Full Name <span className="text-amber-600">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Gurpreet Singh"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.fullName 
                  ? 'border-red-400 bg-red-50/30 focus:ring-red-500' 
                  : 'border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-amber-500/20'
              }`}
              {...register('fullName', {
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Email Address <span className="text-amber-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email 
                  ? 'border-red-400 bg-red-50/30 focus:ring-red-500' 
                  : 'border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-amber-500/20'
              }`}
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Phone / WhatsApp Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.phone 
                  ? 'border-red-400 bg-red-50/30 focus:ring-red-500' 
                  : 'border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-amber-500/20'
              }`}
              {...register('phone', {
                pattern: {
                  value: /^[0-9+\s\-()]{7,16}$/,
                  message: 'Please enter a valid phone number'
                }
              })}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Company / Architecture Firm (Optional) */}
          <div>
            <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Company or Residence Location <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="e.g. Sector 8, Chandigarh / Villa Mohali"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm transition-all focus:outline-none"
              {...register('companyName')}
            />
          </div>
        </div>

        {/* Project Category / Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Project Category <span className="text-amber-600">*</span>
          </label>
          <select
            id="subject"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm transition-all focus:outline-none"
            {...register('subject', { required: 'Please select a project category' })}
          >
            <option value="Custom Dining & Living Furniture">Custom Dining & Living Furniture (Solid Teak / Sheesham)</option>
            <option value="Bespoke Modular Kitchen">Bespoke Modular Kitchen & Island Joinery</option>
            <option value="Architectural Doors & Pivot Gates">Architectural Entrance Pivot Doors & Windows</option>
            <option value="Solid Wood Wardrobes & Walk-In Closets">Solid Wood Wardrobes & Walk-In Closets</option>
            <option value="Acoustic Slat Wall Panelling">Acoustic Slat Wood Wall Panelling</option>
            <option value="Full Residence Architectural Carpentry">Full Residence Woodwork / Turnkey Joinery</option>
            <option value="Commercial & Office Fitout">Commercial, Studio or Restaurant Woodwork</option>
            <option value="Other Custom Craftsmanship">Other Custom Project</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Project Description & Requirements <span className="text-amber-600">*</span>
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Please mention room dimensions, timber preference (Teak, Sheesham, Oak), expected delivery timeline, or any specific blueprints you have..."
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.message 
                ? 'border-red-400 bg-red-50/30 focus:ring-red-500' 
                : 'border-stone-300 bg-stone-50/50 hover:border-stone-400 focus:border-amber-500 focus:ring-amber-500/20'
            }`}
            {...register('message', {
              required: 'Please provide details about your project',
              minLength: { value: 15, message: 'Message should be at least 15 characters long' }
            })}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Privacy consent checkbox */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300"
              {...register('consent', {
                required: 'You must agree to the privacy terms to submit'
              })}
            />
            <span className="text-xs text-stone-600 leading-normal">
              I agree that Dilip Wood Works may store and use my details to contact me regarding my woodwork inquiry in accordance with the{' '}
              <a href="/privacy" target="_blank" className="text-amber-800 underline font-medium hover:text-amber-950">
                Privacy Policy
              </a>.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-red-600 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={submissionStatus.state === 'loading'}
            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {submissionStatus.state === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Project Inquiry</span>
                <Send className="w-5 h-5 text-stone-950" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
