import SocialNav from "./SocialNav";

export default function PageNavigation() {
  return (
    <SocialNav>
      <SocialNav.Link href="https://github.com/jerolan">Github</SocialNav.Link>
      <SocialNav.Link href="https://twitter.com/sediceyerom">
        Twitter
      </SocialNav.Link>
      <SocialNav.Link href="/blog">Blog</SocialNav.Link>
    </SocialNav>
  );
}
