import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Парикмахерские услуги',
    description: 'Стрижки, укладки, окрашивание волос любой сложности',
    price: 'от 2500 ₽',
    icon: 'Scissors'
  },
  {
    title: 'Услуги стилиста',
    description: 'Создание уникального образа, подбор гардероба',
    price: 'от 5000 ₽',
    icon: 'Sparkles'
  },
  {
    title: 'Услуги визажиста',
    description: 'Макияж для любого случая, свадебный визаж',
    price: 'от 3000 ₽',
    icon: 'Palette'
  }
];

const team = [
  {
    name: 'Анна Соколова',
    role: 'Парикмахер-стилист',
    experience: '12 лет опыта',
    description: 'Специалист по сложным окрашиваниям и стрижкам',
    image: 'https://cdn.poehali.dev/projects/8de1a961-0e8b-475a-9eea-6e5b47141c8b/files/1981dbd4-7db2-407d-8199-1576bfae10fc.jpg'
  },
  {
    name: 'Мария Петрова',
    role: 'Визажист',
    experience: '8 лет опыта',
    description: 'Эксперт в создании свадебных образов',
    image: 'https://cdn.poehali.dev/projects/8de1a961-0e8b-475a-9eea-6e5b47141c8b/files/4b4fa4fe-22aa-4152-99f9-ef3fadc13152.jpg'
  },
  {
    name: 'Елена Волкова',
    role: 'Стилист имиджмейкер',
    experience: '10 лет опыта',
    description: 'Создание индивидуального стиля для каждого клиента',
    image: 'https://cdn.poehali.dev/projects/8de1a961-0e8b-475a-9eea-6e5b47141c8b/files/1981dbd4-7db2-407d-8199-1576bfae10fc.jpg'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Центрифуга</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="hover:text-primary transition-colors">Персонал</a>
            <a href="#about" className="hover:text-primary transition-colors">О салоне</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-dark font-medium">
            Записаться
          </Button>
        </nav>
      </header>

      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/8de1a961-0e8b-475a-9eea-6e5b47141c8b/files/5b62e8fc-f53d-43a2-9eee-39923cfb88f6.jpg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-background" />
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-white">
            Центрифуга
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Премиум салон красоты для создания вашего идеального образа
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-dark font-medium text-lg px-8 py-6">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-serif font-bold mb-4 text-dark">Наши услуги</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale border-2 border-border hover:border-primary transition-all duration-300 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold mb-3 text-dark">{service.title}</h4>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-xl font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-serif font-bold mb-4 text-dark">Наши мастера</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="hover-scale border-2 border-border hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold mb-2 text-center text-dark">{member.name}</h4>
                  <p className="text-primary text-center font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center mb-3">{member.experience}</p>
                  <p className="text-center text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h3 className="text-5xl font-serif font-bold mb-4 text-dark">О салоне</h3>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Салон красоты "Центрифуга" — это место, где создаются уникальные образы и воплощаются 
              самые смелые идеи. Мы работаем на рынке красоты уже более 15 лет и знаем всё о последних 
              трендах в индустрии.
            </p>
            <p>
              Наши мастера регулярно проходят обучение в ведущих академиях красоты Европы и применяют 
              только проверенные техники и качественные материалы премиум-класса.
            </p>
            <p>
              Мы создали пространство, где вы можете расслабиться и доверить свою красоту 
              настоящим профессионалам своего дела.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-serif font-bold mb-4 text-dark">Контакты</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-dark">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-dark">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-dark">Время работы</h4>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                  </div>
                </div>
              </Card>

              <div className="rounded-lg overflow-hidden border-2 border-border h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4447773734076!2d37.60578731592407!3d55.76370998055486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMTUsINCc0L7RgdC60LLQsCwgMTI1MDA5!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <Card className="p-8 border-2 border-border">
              <h4 className="text-3xl font-serif font-bold mb-6 text-dark">Записаться</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Сообщение" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-dark font-medium text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Центрифуга</h3>
          <p className="text-gray-400 mb-6">Салон красоты премиум-класса</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Send" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Центрифуга. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}