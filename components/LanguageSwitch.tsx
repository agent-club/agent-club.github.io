"use client";
import { useEffect, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const [hash, setHash] = useState("");
  const t = dictionaries[locale];
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return (
    <div className="language-switch" role="group" aria-label={t.languageLabel}>
      {(["en", "zh"] as const).map((language) =>
        language === locale ? (
          <span key={language} aria-current="page" lang={language}>
            {language === "en" ? "EN" : "中文"}
          </span>
        ) : (
          <a
            key={language}
            href={`/${language}/${hash}`}
            hrefLang={language}
            lang={language}
            aria-label={language === "en" ? t.switchEnglish : t.switchChinese}
          >
            {language === "en" ? "EN" : "中文"}
          </a>
        ),
      )}
    </div>
  );
}
