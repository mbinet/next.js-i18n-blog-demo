export default async (req, res) => {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()


  if (req.query.slug) {
    // Redirect to the path from the fetched post
    res.redirect(req.query.slug)
  } else {
    res.end('Preview mode disabled');
  }

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}