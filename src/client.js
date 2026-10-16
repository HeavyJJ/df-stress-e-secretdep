export function token() {
  const t = process.env.WIDGET_TOKEN;
  if (!t) throw new Error("MISSING_WIDGET_TOKEN: set WIDGET_TOKEN in the environment");
  return t;
}
