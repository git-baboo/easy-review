import CheckboxTheme from "@/markdown/theme/CheckboxTheme";
import CodeTheme from "@/markdown/theme/CodeTheme";
import DividerTheme from "@/markdown/theme/DividerTheme";
import HeadingTheme from "@/markdown/theme/HeadingTheme";
import LinkTheme from "@/markdown/theme/LinkTheme";
import QuoteTheme from "@/markdown/theme/QuoteTheme";

const customTheme: any = {
  h1: HeadingTheme,
  h2: HeadingTheme,
  h3: HeadingTheme,
  h4: HeadingTheme,
  h5: HeadingTheme,
  h6: HeadingTheme,
  code: CodeTheme,
  blockquote: QuoteTheme,
  hr: DividerTheme,
  a: LinkTheme,
  input: CheckboxTheme,
};

export default customTheme;
