import Link from "next/link";
import type { IconType } from "react-icons/lib";

interface FooterSocialLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  Icon: IconType;
}

export const FooterSocialLink: React.FC<FooterSocialLinkProps> = ({
  children,
  Icon,
  ...props
}) => {
  return (
    <Link
      target="_blank"
      className="flex items-center justify-center gap-2"
      {...props}
    >
      <Icon size={18} />
      <span className="hover:underline sm:max-xl:hidden">{children}</span>
    </Link>
  );
};
