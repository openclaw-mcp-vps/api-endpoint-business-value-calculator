export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the Revenue Impact of Every API Endpoint
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Map API endpoint usage to business metrics. Discover which endpoints drive revenue, which are dead weight, and where to focus engineering effort.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Works with DataDog, New Relic, or manual CSV upload.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: 'Revenue per endpoint', desc: 'AI maps each endpoint to a business function and attributes revenue.' },
            { stat: 'Unused endpoint alerts', desc: 'Identify endpoints with zero traffic wasting infrastructure budget.' },
            { stat: 'Optimization priorities', desc: 'Rank endpoints by value-to-cost ratio to guide refactoring.' }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#58a6ff] font-semibold mb-1">{item.stat}</p>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited endpoint analysis',
              'DataDog & New Relic integration',
              'AI business function categorization',
              'Revenue attribution reports',
              'Unused endpoint detection',
              'CSV & JSON manual import'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does revenue attribution work?',
              a: 'Our AI analyzes your endpoint names, paths, and usage patterns to categorize them by business function (checkout, auth, reporting, etc.) and then maps them to revenue events using your traffic data.'
            },
            {
              q: 'Do I need to connect DataDog or New Relic?',
              a: 'No. You can manually upload a CSV or JSON file with endpoint names and call counts. Integrations are optional and make the process faster.'
            },
            {
              q: 'What if I cancel my subscription?',
              a: 'You can cancel anytime. You keep access until the end of your billing period and can export all your reports before canceling.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} API Value Calculator. All rights reserved.
      </footer>
    </main>
  )
}
