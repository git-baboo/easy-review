const Seo = () => {
  return (
    <>
      <meta property="og:url" content="https://easy-review.app" />
      <meta
        property="og:title"
        content="Easy Review | より気軽なコードレビュー体験を"
      />
      <meta property="og:site_name" content="Easy Review" />
      <meta
        property="og:description"
        content="Easy Reviewは初心者エンジニアのコードレビューに対する不安感や障壁を払拭します。"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/git-baboo/easy-review/images/ogp.png"
      />

      {/* Twitter 用の設定 */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default Seo;
