export default function Entry() {
  // Static export cannot perform a server redirect; Cloudflare handles it via _redirects.
  return (
    <main className="entry-page">
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <a className="brand" href="/en/">
        agentclub.
      </a>
      <p>
        <a href="/en/">Enter Agent Club ↗</a>
      </p>
    </main>
  );
}
