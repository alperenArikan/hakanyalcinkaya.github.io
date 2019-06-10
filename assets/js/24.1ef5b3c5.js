(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{203:function(a,n,e){"use strict";e.r(n);var r=e(0),t=Object(r.a)({},function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("Title"),a._v(" "),e("h2",{attrs:{id:"hemen-hazirladigim-videoyu-izlemek-istersen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hemen-hazirladigim-videoyu-izlemek-istersen","aria-hidden":"true"}},[a._v("#")]),a._v(" Hemen Hazırladığım Videoyu İzlemek İstersen;")]),a._v(" "),e("Youtube"),a._v(" "),e("p",[a._v("Eğer Django Framework kullanıyorsan, ister Windows'ta çalışın istersen de macOS'ta çalışın günün sonunda projeniz Linux ortamında kurulacak ve çalıştırılacaktır. Bu yüzden Linux ile bilginin olması ve tüm ortamının Linux'te olması kodların yayına alındığında sana avantaj sağlayacaktır.")]),a._v(" "),e("p",[a._v("Windows kullananlar ayrıca bazen performans sorunları yaşadıklarını da iletiyor. Bu sorun yine Windows işletim sisteminin uyumsuzluğundan kaynaklanıyor. Peki biz Windows'ta çalışırken Linux'te projemizi nasıl aynı anda ayaklandırıp çalıştırabileceğiz? Sorunun yanıtı "),e("a",{attrs:{href:"https://www.vagrantup.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vagrant"),e("OutboundLink")],1),a._v("..")]),a._v(" "),e("h2",{attrs:{id:"baslamadan-once"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baslamadan-once","aria-hidden":"true"}},[a._v("#")]),a._v(" Başlamadan Önce")]),a._v(" "),e("h3",{attrs:{id:"vagrant-a-neden-ihtiyacimiz-var"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vagrant-a-neden-ihtiyacimiz-var","aria-hidden":"true"}},[a._v("#")]),a._v(" Vagrant'a Neden İhtiyacımız Var?")]),a._v(" "),e("p",[a._v("Eğer Windows işletim sisteminde Vagrant yüklü değilse ve Linux işletim sistemine ait bir dağıtımı sanal olarak kurmak istersen VirtualBox ile kurabilirsin. Ama kurulumu yaptıktan sonra dosyaların senkron edilmesi ve ortamın kurulması çok vaktini alabilir.")]),a._v(" "),e("p",[a._v("Eğer Vagrant ile çalışacak olursan Vagrant bilgisayarının sanki uzantısıymış gibi Linux'i çalıştırır, proje dosyalarını entegre eder ve daha az komut kullanarak sistemini oluşturabilir/yönetebilirsin.")]),a._v(" "),e("p",[a._v("Özellikle Laravel Framework'ünün Vagrant'ı kullanmasıyla birlikte Vagrant çok popüler olmuştur. "),e("a",{attrs:{href:"https://laravel.com/docs/5.8/homestead",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel Homestead"),e("OutboundLink")],1),a._v(" sayfasından bakacak olursan Laravel senin hızlıca sistemini kurabilmen ve Framework'ü ayağa kaldırman için gerekli altyapıyı yapmış ve dökümanının içine de eklemiş.. Neden Django böyle yapmamış diye soracak olursan inan bende bilmiyorum ama beraber bu sorunu çözeceğiz 😉")]),a._v(" "),e("h3",{attrs:{id:"gerekli-ortamin-kurulumu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gerekli-ortamin-kurulumu","aria-hidden":"true"}},[a._v("#")]),a._v(" Gerekli Ortamın Kurulumu:")]),a._v(" "),e("p",[a._v("Yazının devamına devam etmeden önce minimumda 4 uygulamayı kurmuş olman gerekiyor. Bunlar:")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Visual Studio Code"),e("OutboundLink")],1),a._v(" veya sevdiğin başka bir editör")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git-SCM"),e("OutboundLink")],1),a._v(". Özellikle Git BASH'i kullanmak için Git'in kurulu olması bizim için önemli.")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("VirtualBox"),e("OutboundLink")],1),a._v(". Vagrant'ın çalışması için sanallaştırma altyapısı gerekmektedir. VirtualBox dışında başka sanallaştırma uygulamalarına da destek veriyor Vagrant ama VirtualBox ücretsiz ve kullanımı kolay olduğu için tercih ediyorum.")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vagrant"),e("OutboundLink")],1),a._v(". Sonunda Vagrant'ı kurabilirsin 😃")])]),a._v(" "),e("blockquote",[e("p",[a._v("Kurulumları tamamladıysan şimdi Vagrant üzerine Ubuntu Server yüklemeye ve ortamımızı hazırlamaya başlayabiliriz.")])]),a._v(" "),e("h2",{attrs:{id:"django-projemizin-vagrant-ile-hazirlanmasi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#django-projemizin-vagrant-ile-hazirlanmasi","aria-hidden":"true"}},[a._v("#")]),a._v(" Django Projemizin Vagrant ile Hazırlanması")]),a._v(" "),e("p",[a._v("Aslında işlem adımlarına bakacak olursak işlemler çok kolay ama ilk başta zorlanabiliriz..")]),a._v(" "),e("ol",[e("li",[a._v("Proje klasörünü oluştur ve Git Bash ile içine gir")]),a._v(" "),e("li",[e("strong",[a._v("Vagrantfile")]),a._v(" oluştur ve düzenle")]),a._v(" "),e("li",[e("strong",[a._v("vagrant up")]),a._v(" ile işletim sistemini aç")]),a._v(" "),e("li",[e("strong",[a._v("pip")]),a._v("'i güncelle")]),a._v(" "),e("li",[e("strong",[a._v("virtualenv")]),a._v(" kur")]),a._v(" "),e("li",[e("strong",[a._v("virtualenv")]),a._v("'yi aktif et")]),a._v(" "),e("li",[e("strong",[a._v("django")]),a._v(" kur")]),a._v(" "),e("li",[e("strong",[a._v("django")]),a._v(" projesi oluştur")]),a._v(" "),e("li",[e("strong",[a._v("django")]),a._v(" projesini çalıştır 😃")])]),a._v(" "),e("p",[a._v("Şimdi bu adımları yapmaya başlayalım..")]),a._v(" "),e("h3",{attrs:{id:"_1-proje-klasorunu-olusturmak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-proje-klasorunu-olusturmak","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. Proje Klasörünü Oluşturmak")]),a._v(" "),e("p",[a._v("Git Bash'i açtıktan sonra açtığımız siyah ekranda(terminal) aşağıdaki komutları yazabiliriz.")]),a._v(" "),e("blockquote",[e("p",[a._v("Not: # ile yazdığım yerler kullandığımız komutların açıklamalarıdır..")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kullanıcımızın home klasörüne girmek için: ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tilda(~) işareti türkçe klavyelerde genellikle alt-gr ile birlikte ü tuşuna basarak çıkartılır.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /c/Users/hy gibi bir klasör bilgisi alabilirsiniz.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd olduğumuz klasörün neresi olduğunu ekrana yazdırır.. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nerede olduğunu bilmek önemldir ;)")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" Sites\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Sites adlı bir klasör oluşturduk. Birkez oluşturduğun klasörü tekrar oluşturmamaya çalış ;)")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" Sites\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Sites klasörüne girdik.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" hy_blog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hy_blog adlı bir klasörü terminalden oluşturduk. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bunu normalde gidip Windows Explorer içinden de yapabilirdin ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ama madem Linux dünyasına giriş yapmaya çalışıyoruz o zaman komutları elle yazalım..")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" hy_blog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hy_blog klasörüne giriş yaptık.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# eğer pwd yazarsan bulunduğun path bilgisinin ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /c/Users/kullaniciadin/Sites/hy_blog gibi olduğunu görebilirsin. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Eğer değilse o zaman adımlara dikkat..")]),a._v("\n")])])]),e("p",[a._v("Harika.. artık ~/Sites/hy_blog klasörümüz oluştu ve proje klasörümüzün içindeyiz..")]),a._v(" "),e("h3",{attrs:{id:"_2-vagrantfile-olusturmak-ve-vagrant-ile-ilgili-ilk-hazirliklar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vagrantfile-olusturmak-ve-vagrant-ile-ilgili-ilk-hazirliklar","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. Vagrantfile oluşturmak ve Vagrant ile İlgili İlk Hazırlıklar")]),a._v(" "),e("p",[a._v("Vagrant, kendi içinde bulundurduğu imajlara Box demektedir. Oluşturulan Box'lar Ubuntu gibi firmalar tarafından oluşturulduğu gibi aynı zamanda kişiler tarafından oluşturulabilir ve çalışmaya hazır ortamlar sunulmuş olabilir. Örneğin Laravel Framework'ü hazır bir box bulundurur ve projeni hemen aktive edebilirsin. Biz ise tüm işi elle yapacağız..\nTüm Box'ları incelemek için:\nhttps://app.vagrantup.com/boxes/search")]),a._v(" "),e("p",[a._v("Biz terminaldeyken hemen işlemlere devam edelim. En son Git Bash açıktı ve kendi proje klasörümüzdeydik.. "),e("a",{attrs:{href:"https://app.vagrantup.com/ubuntu/boxes/bionic64",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ubuntu 18.04 LTS"),e("OutboundLink")],1),a._v(" sürümünü initial etmek için:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("vagrant init ubuntu/bionic64\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yukarıdaki komutu çalıştırman yeterli..")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Eğer herşey yolundaysa ls dosyaları listeler")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Vagrantfile dosyasını görmüş olman gerekir. ")]),a._v("\n")])])]),e("p",[a._v("Git Bash ile Vagrantfile'ı oluşturduysak bu dosyayı güncelleyerek biz de bir satır ekleyeceğiz. Vagrantfile dosyasını herhangi bir editörde açarak aşağıdaki satırı bulup altına yeni bir satır eklemeni istiyorum. Vagrantfile içinde 80 portunu 8000 portuna yönlendir gibi bir ayar var. Biz ise kendi bilgisayarımızdaki 8000 portunu Vagrant içindeki 8000 portuna bağlayacak konfigürasyonu yazacağız..")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# config.vm.network "forwarded_port", guest: 80, host: 8080')]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yukarıdaki satırda guest yani Vagrant ile çalışan işletim sisteminin 80 portunu bizim işletim sistemimizde 8080 portuna yönlendireceğini söylüyor..")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# biz ise 8000 portunun 8000 portuna yönlendireceğiz Django için")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yukarıdaki satırdan # işaretini kaldırdıktan sonra rakamları 8000 olarak düzelt..")]),a._v("\n\nconfig.vm.network "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"forwarded_port"')]),a._v(", guest: 8000, host: 8000\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kaydetmeyi unutma ;)")]),a._v("\n")])])]),e("p",[a._v("Harika.. Vagrantfile dosyamız güncellendiğine göre artık sistemimizi açmaya hazırız.")]),a._v(" "),e("h3",{attrs:{id:"_3-vagrant-up-ile-sistemin-calistirilmasi-sunucunun-acilmasi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-vagrant-up-ile-sistemin-calistirilmasi-sunucunun-acilmasi","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. vagrant up ile Sistemin Çalıştırılması/Sunucunun Açılması")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# proje klasörümüzde Git Bash içerisinde:")]),a._v("\n\nvagrant up\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Vagrantfile ile birlikte proje klasörümüz hazırlanarak Ubuntu 18 içerisinde çalışmaya başlayacak.")]),a._v("\n\nvagrant "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant ssh ile sunucumuza ulaşıp artık pip güncelleme ve")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# diğer işlemlere geçebiliriz.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# eğer ssh ile giriş yaptıysak artık Linux/Ubuntu işletim sisteminin içinde olduğumuzu görebiliriz.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant@ubuntu-bionic:~$")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yukarıda yazanlara bakacak olursak")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kullanici@servername:klasor(~)user($)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ -> superuser olmayan kullanıcı, # ise superuser")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tilda (~) kullanıcının home klasöründe olduğumuzu belirtir")]),a._v("\n")])])]),e("h3",{attrs:{id:"_4-pip-python-paket-yukleyicisinin-yuklenmesi-ve-guncellenmesi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-pip-python-paket-yukleyicisinin-yuklenmesi-ve-guncellenmesi","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. PIP - Python Paket Yükleyicisinin Yüklenmesi ve Güncellenmesi")]),a._v(" "),e("p",[a._v("Ubuntu 18 içerisinde python3 kurulu olarak gelmektedir. Biz ise pip paket yükleyicisini ilk önce kurup daha sonra sürümünü güncelleyeceğiz.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant@ubuntu-bionic:~$ içerisinde")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sudo(superuser do) paket dosyalarını güncelle..")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" python3-pip\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# python3 için pip paket yükleyicisini yükle")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yüklemek istiyormusunuz yazısı geldiğinde Y yazıp enter tuşuna basman lazım.")]),a._v("\n\npip3 --version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pip3 ün versiyonunu kontrol ettik.")]),a._v("\n\npip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --upgrade pip\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pip sürümünü güncelledik.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# şimdi sunucumuzu kapatıp tekrar açacağız")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exit")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ssh bağlantısını kapattık ve proje klasörümüze geri geldik")]),a._v("\n\nvagrant "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant sunucumuzu kapatır")]),a._v("\n\nvagrant up\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant sunucumuzu açar")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# veya vagrant reload ile bu işlemi yapabilirdin ;)")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sunucu açıldıktan sonra tekrar:")]),a._v("\nvagrant "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vagrant ssh ile sunucumuza tekrar bağlantık")]),a._v("\n")])])]),e("h3",{attrs:{id:"_5-virtualenv-kurulumu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-virtualenv-kurulumu","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. virtualenv Kurulumu")]),a._v(" "),e("p",[e("strong",[a._v("virtualenv")]),a._v(" python projelerinde sanal ortam oluşturmak için çok önemlidir. Eğer projelerimizi python sanal ortamına taşımazsak birçok karmaşa ile karşılaşabiliriz. İstemediğimiz versiyon güncellemeleri ve paket uyumsuzlukları gibi birçok durum olabilir.")]),a._v(" "),e("p",[a._v("Virtualenv kurulumu için Git Bash içerisinde sunucumuza ssh ile bağlandıktan sonra:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" virtualenv --user\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# virtualenv kur")]),a._v("\n\nvirtualenv --version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# virtualenv versiyonunu kontrol et.")]),a._v("\n")])])]),e("h3",{attrs:{id:"_6-virtualenv-ile-python-sanal-ortaminin-olusturulmasi-ve-aktif-edilmesi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-virtualenv-ile-python-sanal-ortaminin-olusturulmasi-ve-aktif-edilmesi","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. virtualenv ile Python Sanal Ortamının Oluşturulması ve Aktif Edilmesi")]),a._v(" "),e("p",[a._v("Sanal sunucu kurmuştuk, niye sanal ortam kuruyoruz tekrar? Biliyorum 😃 bu soru hemen aklına gelmiştir. VirtualBox bilgisayarımız içerisinde sanal olarak başka işletim sistemleri kurmak için kullandığımız altyapı. Çoğu yazılım dili ise kendi paketlerini kurmak için paket yöneticisine ihtiyaç duyar. Python'daki paket yöneticisi "),e("strong",[a._v("PIP")]),a._v(". PIP ile işletim sistemi bazlı veya Python Sanal Ortamı bazında da tekrar tekrar aynı paketin farklı versiyonlarını kurabiliriz. Neden farklı versiyonlara ihtiyacım olsun ki? diye soracak olursan yaptığın projenin stabil çalışması için versiyon kontrolü ve izolasyon çok önemlidir. Her proje kendi ortamında durduğunda daha verimli çalışabiliriz. Virtualenv bize bu ortamı hazırlamak için gerekli altyapıyı sunuyor diye yanıt verebilirim.")]),a._v(" "),e("h4",{attrs:{id:"virtualenv-ile-python-sanal-ortaminin-hazirlanmasi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv-ile-python-sanal-ortaminin-hazirlanmasi","aria-hidden":"true"}},[a._v("#")]),a._v(" Virtualenv ile Python Sanal Ortamının Hazırlanması")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("virtualenv -p python3 ~/env\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# kullanıcının home klasörü altında env klasörünün içine python3 ile python ortamını hazırla..")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# not: bu işlemi her proje için bir kez yapacaksın. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Ortam oluşturulduktan sonra tekrar tekrar oluşturmaya ihtiyacın yok..")]),a._v("\n")])])]),e("h4",{attrs:{id:"virtualenv-nin-aktif-edilmesi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv-nin-aktif-edilmesi","aria-hidden":"true"}},[a._v("#")]),a._v(" Virtualenv'nin aktif edilmesi")]),a._v(" "),e("p",[a._v("Virtualenv ile ortamı hazırladın ama aktif etmen gerekiyor..")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/env/bin/activate\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# env içindeki yapıyı aktive et..")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# eğer herşey yolundaysa")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# (env) vagrant@ubuntu-bionic:~$ solda env yazısını göreceğiz.")]),a._v("\n")])])]),e("p",[a._v("Eğer env yazısını terminal ekranında görüyorsan artık pip ile sanal ortama paketlerimizi yükleyebiliriz.")]),a._v(" "),e("h3",{attrs:{id:"_7-django-kur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-django-kur","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. Django Kur")]),a._v(" "),e("p",[a._v("Git Bash içerisinde sunucuya halen bağlıyız ve artık pip ile env içerisine django kurabiliriz.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" django\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pip ile django paketi env içerisine eklenir")]),a._v("\n\npip freeze\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yüklü olan paket listesini gösterir")]),a._v("\n")])])]),e("h3",{attrs:{id:"_8-django-projesi-olustur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-django-projesi-olustur","aria-hidden":"true"}},[a._v("#")]),a._v(" 8. Django Projesi Oluştur")]),a._v(" "),e("p",[a._v("Django paketi Env içerisine yüklendi, şimdi django-admin ile projemizi oluşturabiliriz.. Ama doğru klasörde olduğumuza emin olmamız gerekiyor. Vagrant ilk ayarlarında projemizi /vagrant klasörüne senkronize ediyor.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. Proje klasörüne gel..")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /vagrant\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# proje klasörümüze geldik")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd ile /vagrant klasöründe olduğumuzu doğruladık")]),a._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. Django Projesi oluştur")]),a._v("\ndjango-admin startproject hy_blog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hy_blog isimli django projesini oluştur.. bu ismi değiştirebilirsin ;)")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. Django proje klasörünün sonuna _dj ekle")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# bu adımı yapmak zorunda değilsin")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# amacım django projesinin olduğu klasörü ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# daha rahat ayırt edebilmek..")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /vagrant/hy_blog /vagrant/hy_blog_dj\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dosyaları listele")]),a._v("\n")])])]),e("h3",{attrs:{id:"_9-django-projesini-calistir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-django-projesini-calistir","aria-hidden":"true"}},[a._v("#")]),a._v(" 9. Django Projesini Çalıştır 😃")]),a._v(" "),e("p",[a._v("Projemiz oluştuğuna göre artık "),e("strong",[a._v("manage.py")]),a._v(" dosyasının olduğu klasöre gidip projemizi çalıştırabiliriz..")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" hy_blog_dj \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# veya isim değiştirmediysen")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" hy_blog "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dikkat ! proje klasörünün içinde bu isimli bir klasör daha var.. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# bu yüzden iki kez klasöre girme, her adımda ls komutuyla dosyaları listele..")]),a._v("\n\npython manage.py runserver 0:8000\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# django projemizi 8000 portuyla çalıştırdık.")]),a._v("\n\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("Browser içerisinde projeni açabilirsin ;)")]),a._v(" "),e("p",[a._v("Artık kullandığın browser içerisinde:")]),a._v(" "),e("p",[a._v("http://localhost:8000")]),a._v(" "),e("p",[a._v("yazarak artık django projene ulaşabilirsin.")])]),a._v(" "),e("p",[a._v("Harika.. herşey buraya kadar 😃 vagrant ile birlikte Ubuntu içerisinde projemizi kurduk ve çalıştırdık. Güzel projeler oluşturup GitHub'a ekle ve arada mesaj atmayı unutma.")]),a._v(" "),e("p",[a._v("Başarılar dilerim 😉")])],1)},[],!1,null,null,null);n.default=t.exports}}]);