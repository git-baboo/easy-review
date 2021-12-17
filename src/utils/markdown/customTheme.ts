import CheckboxTheme from "@/utils/markdown/theme/CheckboxTheme";
import CodeTheme from "@/utils/markdown/theme/CodeTheme";
import DividerTheme from "@/utils/markdown/theme/DividerTheme";
import HeadingTheme from "@/utils/markdown/theme/HeadingTheme";
import LinkTheme from "@/utils/markdown/theme/LinkTheme";
import QuoteTheme from "@/utils/markdown/theme/QuoteTheme";

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
