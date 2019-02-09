(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{302:function(t,a,s){"use strict";s.r(a);var r=s(37),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Title"),t._v(" "),s("p",[t._v("Python 3.6 ile birlikte gelen "),s("router-link",{attrs:{to:"./004-python-3-6-formatted-string.html"}},[t._v("f-strings")]),t._v(" ile ilgili ayrı bir makale yazıp en çok kullanılan biçimlendirme şekillerini ayrıca yazmıştım. Şimdi hızlı bir tur daha atalım 😃")],1),t._v(" "),s("p",[t._v("Python 3.6 ile Birlikte Gelen Yenilikler:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0498/",target:"_blank",rel:"noopener noreferrer"}},[t._v("f-strings"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Underscores in Numeric Literals"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.python.org/3.6/library/secrets.html#module-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secrets"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Type Hints"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"👍-f-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👍-f-strings","aria-hidden":"true"}},[t._v("#")]),t._v(" 👍 f-strings:")]),t._v(" "),s("p",[t._v(".format kullanımından daha hızlı ve daha az yer kaplıyor, ayrıca performans açısından daha iyi olduğuyla ilgili makaleler var. Bu yüzden f-strings'i kullanmaya başlayalım. "),s("router-link",{attrs:{to:"./004-python-3-6-formatted-string.html"}},[t._v("f-strings makalemi incelemek için tıkla..")])],1),t._v(" "),s("h2",{attrs:{id:"underscores-rakamsal-ifadeler-icin-altcizgili-yazim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#underscores-rakamsal-ifadeler-icin-altcizgili-yazim","aria-hidden":"true"}},[t._v("#")]),t._v(" Underscores (Rakamsal İfadeler İçin Altçizgili Yazım):")]),t._v(" "),s("p",[t._v("Çok önemli olmasada yine Python'ın kod okurken kolaylık sağlamak adına yaptığı geliştirmelerden biri olduğunu söyleyebiliriz. Örneğin "),s("strong",[t._v("price = 1000000.00")]),t._v(" yazdığımda okumak zorken, tanımlamalarda artık "),s("strong",[t._v("price = 1_000_000.00")]),t._v(" olarak kullanabileceğiz.")]),t._v(" "),s("div",{staticClass:"language-pytho3 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("price = 1_000_000.00\n")])])]),s("h2",{attrs:{id:"secrets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secrets","aria-hidden":"true"}},[t._v("#")]),t._v(" Secrets")]),t._v(" "),s("p",[t._v("Secrets modülü sayesinde token veya güvenli veriler oluşturabiliyoruz.")]),t._v(" "),s("div",{staticClass:"language-python3 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import secrets\n\nsecrets.token_urlsafe(32)\n>>> '51PxQ5t9tAKXKrnLwgxNu84viuUc88dTDwD-w_35HlI'\n\n")])])]),s("h2",{attrs:{id:"👍-type-hints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👍-type-hints","aria-hidden":"true"}},[t._v("#")]),t._v(" 👍 Type Hints:")]),t._v(" "),s("p",[t._v("Statik dillerden alışık olduğumuz price:int = 100 ifadesini artık Python'da kullanabileceğiz. Fakat Python dinamik bir dil olduğundan dolayı tanımlamış olduğunuz price değişkenini price = 'this_is_price' int'ten farklı bir şekilde tanımlayabilirsiniz. Ve yine pep 0484'teki makalede diyor ki;")]),t._v(" "),s("p",[s("strong",[t._v("Python will remain a dynamically typed language, and the authors have no desire to ever make type hints mandatory, even by convention.")])]),t._v(" "),s("p",[t._v("Yani Type Hints gelmiş olsa bile bu zorunlu bir özellik olmayacak ve dinamik dili bağlamayacak.")]),t._v(" "),s("p",[t._v("Yinede Fonksiyonlarımızda bu özelliği kullanacak olursak fonksiyonları daha güvenli hale getirebiliriz. Çünkü fonksiyonlarda bu denetim güzel çalışıyor.")]),t._v(" "),s("p",[t._v("Kullandığınız ide veya type checker bu denetimi yapabilir ve hatalarınızı gösterir fakat yinede Type Hints'e aykırı düzenlemeleriniz çalışmaya devam edebilir.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pip install mypy")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name\n\nprice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1_000\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nprice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is price"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hakan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" this "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" price\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Hello Hakan\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nTypeError                                 Traceback "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ipython"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5ef8c867790a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ipython"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4849dcb90972")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1_000\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nTypeError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" must be "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############ TERMINAL ############")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# python_type_hints.py file:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\ndef greeting(name: str) -> str:\n    return \'Hello \' + name\n\nprice:int = 1_000\n\nprint(price)\n\nprice = "this is price"\n\nprint(price)\n\nprint(greeting("Hakan"))\n\nprint(greeting(1_000))\n"""')]),t._v("\n\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypy python_type_hints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\npython_type_hints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Incompatible types "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" assignment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expression has "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variable has "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npython_type_hints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Argument "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"greeting"')]),t._v(" has incompatible "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expected "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),t._v("\n")])])])],1)},[],!1,null,null,null);e.options.__file="005-python-3-6-ile-gelen-yenilikler.md";a.default=e.exports}}]);