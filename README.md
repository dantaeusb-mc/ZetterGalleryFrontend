### Translation naming convention:

{path|"common"}[.error]?[.{component}]+.node

Path rules:

* Camel case to dash (`crossAuth` to `cross-auth`)
* Slash to dot (`wiki/zetter/recipes` to `wiki.zetter.recipes`)

Component rules:

* Keep the hierarchy (`footer/legal/rules` to `footer.legal.rules`, not `footer.rules.legal`)
* There should always be at least one component
* Use the most specific path, if translation is used in some component, do not put it as parent's translation, unless
  it's common component
* For commonly used components use `common` like `common.icon.error`

Error rules:

* After path or common, like `wiki.error.no-translation` and `common.error.generic`

Code style notes:

* File names: hyphen-separated dot type (component/context, excluding pages as used for routing) dot ts.
* No default export in components

### Things I need to remember

* Logo font: Fipps by Stefanie Koerner / pheist;
* Minecraftia font by Aandrew Tyler (unable to reach them) has broken baseline, but looks like it's free for
  non-commercial;