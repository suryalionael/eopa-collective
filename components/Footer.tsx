import Link from "next/link";
import { footerNav, legalNav, siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>{siteConfig.name}</span>
          <span className={styles.partner}>In partnership with Aspen Training Centre</span>
        </div>
        <nav className={styles.nav} aria-label="Footer">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.legal}>
        {legalNav.map((item) => (
          <Link key={item.href} href={item.href} className={styles.legalLink}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
