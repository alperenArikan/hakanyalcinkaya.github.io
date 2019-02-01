(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{318:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Title"),t._v(" "),s("p",[t._v("Bu blog yazısına başlarken hedefim Python 3.6 ile birlikte gelen "),s("strong",[t._v("f-strings")]),t._v("'i anlatmaktı, fakat uzun zamandır kullanılan % ve .format ile metin biçimlendirme özelliklerini birlikte örneklendirirsem daha iyi olacağını düşündüm.")]),t._v(" "),s("h2",{attrs:{id:"pep-dokuman-linkleri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pep-dokuman-linkleri","aria-hidden":"true"}},[t._v("#")]),t._v(" PEP Döküman Linkleri :")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0498/",target:"_blank",rel:"noopener noreferrer"}},[t._v("f-strings(f'Hello {first_name}'): PEP 498 -- Literal String Interpolation"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-3101/",target:"_blank",rel:"noopener noreferrer"}},[t._v("'Hello {}'.format(first_name) - Advanced String Formatting"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("% Biçimlendirme yöntemi çok uzun zamandır kullanılıyor. Python 2.7 ile birlikte .format özelliği de okuma rahatlığı açısından sıkça kullanılmaya başlandı. Python 3.6 ile birlikte gelen f-strings ise performans ve okuma açısından çok daha iyi.")]),t._v(" "),s("h2",{attrs:{id:"hemen-kullanmaya-baslayalim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hemen-kullanmaya-baslayalim","aria-hidden":"true"}},[t._v("#")]),t._v(" Hemen kullanmaya başlayalım:")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("UNUTMA!")]),t._v(" "),s("p",[s("strong",[t._v("f''")]),t._v("(f-strings) Python 3.6 ve üzerinde çalışır. Birkaç yerde bu bilgiyi hatırlattım ama yinede buraya uyarı ekliyorum 😉")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("first_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hakan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yalçınkaya"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# % Kullanımı:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s %s"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hakan Yal\\xc3\\xa7\\xc4\\xb1nkaya'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .format() Kullanımı:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{} {}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hakan Yal\\xc3\\xa7\\xc4\\xb1nkaya'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# f"" Kullanımı:')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 3.6")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{first_name} {last_name}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hakan Yalçınkaya'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yer Değiştirmek için:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{1} {0}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" last_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hakan Yal\\xc3\\xa7\\xc4\\xb1nkaya'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python 3.6")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{last_name} {first_name}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yalçınkaya Hakan'")]),t._v("\n")])])]),s("h2",{attrs:{id:"sola-saga-ve-ortaya-bosluk-birakma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sola-saga-ve-ortaya-bosluk-birakma","aria-hidden":"true"}},[t._v("#")]),t._v(" Sola, Sağa ve Ortaya Boşluk Bırakma")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sağa boşluk bırakma:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey! %-10s is ready "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey! python     is ready '")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey! {:10} is ready"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey! python     is ready'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"hey! {'python':10} is ready\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey! python     is ready'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sola Boşluk bırakma")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey! %10s is ready "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey!     python is ready '")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey! {:>10} is ready"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey!     python is ready'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"hey! {'python':>10} is ready\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey!     python is ready'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ortaya Boşluk Eklemek")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey! {:^10} is ready"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey!   python   is ready'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"hey! {'python':^10} is ready\"")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hey!   python   is ready'")]),t._v("\n")])])]),s("h2",{attrs:{id:"bosluk-yerine-karakter-ekleme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bosluk-yerine-karakter-ekleme","aria-hidden":"true"}},[t._v("#")]),t._v(" Boşluk Yerine Karakter Ekleme")]),t._v(" "),s("p",[t._v("Bir kodu incelerken 4 haneli rakamlar oluşturmak için if kullandığını gördüm, eğer 10'dan küçükse başına ÜÇ SIFIR(000) ekle demiş. Örnek: 0005. Bu işlemi if kullanmak yerine metin biçimlendirme ile yapabiliriz.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:04}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0005'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{5:04}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0005'")]),t._v("\n\npk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:04}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0099'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pk:04}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0099'")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ====================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# _ karakteri eklemek")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ====================")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:_>8}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'______99'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:_<8}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'99______'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pk:_>8}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'______99'")]),t._v("\n\nf"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pk:_<8}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'99______'")]),t._v("\n\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Az Kaldı :)")]),t._v(" "),s("p",[t._v("Şimdilik bu kadar yazdım, yine metin biçimlendirme ile ilgili örnekler eklemeye devam edeceğim. Sonuna bir cheatsheet dökümanı hazırlamaya başladım. Yazının devamını beklemeden f-strings kullanmaya hemen başla 😉 soruların olursa buralardayım 😃")])]),t._v(" "),s("h2",{attrs:{id:"cheat-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cheat-sheet","aria-hidden":"true"}},[t._v("#")]),t._v(" Cheat Sheet")]),t._v(" "),s("table",[s("thead",{attrs:{align:"left"}},[s("tr",[s("th",{attrs:{width:"%20"}},[t._v("İşlem")]),t._v(" "),s("th",{attrs:{width:"%20"}},[t._v("%")]),t._v(" "),s("th",{attrs:{width:"%20"}},[t._v(".format")]),t._v(" "),s("th",{attrs:{width:"%20"}},[t._v("f-strings")]),t._v(" "),s("th",{attrs:{width:"%20"}},[t._v("çıktı")])])]),t._v(" "),s("tbody",{attrs:{align:"left"}},[t._l(t.$page.frontmatter.fString,function(a){return[s("tr",[s("td",{attrs:{width:"%20"}},[t._v(t._s(a.title))]),t._v(" "),s("td",{attrs:{width:"%20"}},[t._v(t._s(a.percent))]),t._v(" "),s("td",{attrs:{width:"%20"}},[t._v(t._s(a.format))]),t._v(" "),s("td",{attrs:{width:"%20"}},[t._v(t._s(a.f))]),t._v(" "),s("td",{attrs:{width:"%20"}},[t._v(t._s(a.output))])])]})],2)])],1)},[],!1,null,null,null);r.options.__file="004-python-3-6-formatted-string.md";a.default=r.exports}}]);