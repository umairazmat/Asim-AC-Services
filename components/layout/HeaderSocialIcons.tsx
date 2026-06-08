import { CONTACT } from "@/lib/constants/contact";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import type { Locale } from "@/lib/i18n/config";

type HeaderSocialIconsProps = {
  locale: Locale;
};

const SOCIAL_ITEMS = [
  {
    id: "instagram",
    href: CONTACT.social.instagram.href,
    label: CONTACT.social.instagram.label,
    Icon: InstagramIcon,
  },
  {
    id: "facebook",
    href: CONTACT.social.facebook.href,
    label: CONTACT.social.facebook.label,
    Icon: FacebookIcon,
  },
] as const;

export function HeaderSocialIcons({ locale }: HeaderSocialIconsProps) {
  return (
    <div
      className="header-social"
      aria-label={locale === "ar" ? "وسائل التواصل الاجتماعي" : "Social media"}
    >
      {SOCIAL_ITEMS.map(({ id, href, label, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social__link"
          aria-label={label[locale]}
        >
          <Icon className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}
