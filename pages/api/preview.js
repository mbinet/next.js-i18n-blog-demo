export default async (req, res) => {
  // Please set the NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET env variable
  // on Vercel/Netlify, or everyone will be able to enter Preview Mode and
  // see draft content!

  const secret =
    process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET;

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  if (req.query.slug) {
    // Redirect to the path from the fetched post
    res.redirect(req.query.slug)
  } else {
    // Redirect to the homepage
    // res.writeHead(307, { Location: "/" });
  }

  res.end();
};
