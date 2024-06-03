import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../routes/Register.css';
import logo from '../assets/logo1.png';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const countries = [
    'México', 'Estados Unidos', 'Canadá', 'Brasil', 'Reino Unido', 'Alemania', 'Francia', 'España', 'Italia', 'Japón',
    'China', 'India', 'Australia', 'Argentina', 'Chile', 'Colombia', 'Perú', 'Rusia', 'Sudáfrica',
    'Corea del Sur', 'Arabia Saudita', 'Turquía', 'Egipto', 'Nigeria', 'Kenia', 'Indonesia', 'Tailandia',
    'Noruega', 'Suecia', 'Dinamarca', 'Finlandia', 'Polonia', 'Países Bajos', 'Bélgica', 'Suiza',
    'Austria', 'Portugal', 'Grecia', 'Hungría', 'República Checa', 'Irlanda', 'Nueva Zelanda', 'Malasia',
    'Singapur', 'Filipinas', 'Vietnam', 'Bangladesh', 'Pakistán', 'Sri Lanka', 'Nepal', 'Afganistán',
    'Marruecos', 'Argelia', 'Túnez', 'Libia', 'Ghana', 'Costa de Marfil', 'Senegal', 'Uganda', 'Tanzania'
  ];

  const cities = {
    México: ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Cancún', 'Puebla', 'Tijuana', 'León', 'Mérida'],
    'Estados Unidos': ['Nueva York', 'Los Ángeles', 'Chicago', 'Houston', 'Phoenix', 'Filadelfia', 'San Antonio', 'San Diego'],
    Canadá: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Ciudad de Quebec', 'Winnipeg'],
    Brasil: ['São Paulo', 'Río de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaos', 'Curitiba'],
    'Reino Unido': ['Londres', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Glasgow', 'Edimburgo', 'Bristol'],
    Alemania: ['Berlín', 'Múnich', 'Fráncfort', 'Hamburgo', 'Colonia', 'Stuttgart', 'Düsseldorf', 'Dresde'],
    Francia: ['París', 'Lyon', 'Marsella', 'Toulouse', 'Niza', 'Nantes', 'Estrasburgo', 'Montpellier'],
    España: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Bilbao', 'Alicante'],
    Italia: ['Roma', 'Milán', 'Nápoles', 'Turín', 'Palermo', 'Génova', 'Bolonia', 'Florencia'],
    Japón: ['Tokio', 'Osaka', 'Kioto', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe'],
    China: ['Pekín', 'Shanghái', 'Shenzhen', 'Cantón', 'Chengdu', 'Chongqing', 'Wuhan', 'Hangzhou'],
    India: ['Bombay', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Calcuta', 'Pune', 'Ahmedabad'],
    Australia: ['Sídney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaida', 'Costa Dorada', 'Canberra', 'Newcastle'],
    Argentina: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'Mar del Plata', 'Salta', 'Santa Fe'],
    Chile: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Temuco', 'Rancagua', 'Iquique'],
    Colombia: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Santa Marta'],
    Perú: ['Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Iquitos', 'Piura', 'Tacna'],
    Rusia: ['Moscú', 'San Petersburgo', 'Novosibirsk', 'Ekaterimburgo', 'Kazan', 'Nizhni Nóvgorod', 'Samara', 'Omsk'],
    Sudáfrica: ['Johannesburgo', 'Ciudad del Cabo', 'Durban', 'Pretoria', 'Puerto Elizabeth', 'Bloemfontein', 'Nelspruit', 'Kimberley'],
    'Corea del Sur': ['Seúl', 'Busán', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan'],
    'Arabia Saudita': ['Riad', 'Yeda', 'La Meca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Abha'],
    Turquía: ['Estambul', 'Ankara', 'Esmirna', 'Bursa', 'Antalya', 'Gaziantep', 'Konya', 'Adana'],
    Egipto: ['El Cairo', 'Alejandría', 'Giza', 'Shubra El-Kheima', 'Puerto Saíd', 'Suez', 'Luxor', 'Asuán'],
    Nigeria: ['Lagos', 'Abuya', 'Ibadan', 'Kano', 'Port Harcourt', 'Benín City', 'Kaduna', 'Jos'],
    Kenia: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Nyeri', 'Kitale'],
    Indonesia: ['Yakarta', 'Surabaya', 'Bandung', 'Medan', 'Bekasi', 'Depok', 'Tangerang', 'Makassar'],
    Tailandia: ['Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket', 'Nakhon Ratchasima', 'Khon Kaen', 'Hat Yai', 'Udon Thani'],
    Noruega: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Fredrikstad', 'Kristiansand', 'Sandnes'],
    Suecia: ['Estocolmo', 'Gotemburgo', 'Malmö', 'Upsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg'],
    Dinamarca: ['Copenhague', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens'],
    Finlandia: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti'],
    Polonia: ['Varsovia', 'Cracovia', 'Lodz', 'Wroclaw', 'Poznan', 'Gdansk', 'Szczecin', 'Bydgoszcz'],
    'Países Bajos': ['Ámsterdam', 'Róterdam', 'La Haya', 'Utrecht', 'Eindhoven', 'Tilburgo', 'Groninga', 'Almere'],
    Bélgica: ['Bruselas', 'Amberes', 'Gante', 'Charleroi', 'Lieja', 'Brujas', 'Namur', 'Lovaina'],
    Suiza: ['Zúrich', 'Ginebra', 'Basilea', 'Berna', 'Lausana', 'Winterthur', 'Lucerna', 'San Galo'],
    Austria: ['Viena', 'Graz', 'Linz', 'Salzburgo', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels'],
    Portugal: ['Lisboa', 'Oporto', 'Amadora', 'Braga', 'Coímbra', 'Funchal', 'Setúbal', 'Faro'],
    Grecia: ['Atenas', 'Tesalónica', 'Patras', 'Heraclión', 'Larisa', 'Volos', 'Rodas', 'Ioánina'],
    Hungría: ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét'],
    'República Checa': ['Praga', 'Brno', 'Ostrava', 'Pilsen', 'Liberec', 'Olomouc', 'Ústí nad Labem', 'Hradec Králové'],
    Irlanda: ['Dublín', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Drogheda', 'Swords', 'Dundalk'],
    'Nueva Zelanda': ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Napier', 'Dunedin', 'Palmerston North'],
    Malasia: ['Kuala Lumpur', 'George Town', 'Ipoh', 'Johor Bahru', 'Kuching', 'Kota Kinabalu', 'Shah Alam', 'Malaca'],
    Singapur: ['Singapur'],
    Filipinas: ['Manila', 'Ciudad Quezón', 'Ciudad de Dávao', 'Ciudad de Cebú', 'Zamboanga', 'Taguig', 'Pasig', 'Cagayán de Oro'],
    Vietnam: ['Hanoi', 'Ciudad Ho Chi Minh', 'Da Nang', 'Hai Phong', 'Can Tho', 'Bien Hoa', 'Nha Trang', 'Hue'],
    Bangladesh: ['Daca', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Comilla'],
    Pakistán: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multán', 'Hyderabad', 'Gujranwala'],
    'Sri Lanka': ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Anuradhapura', 'Ratnapura', 'Matara'],
    Nepal: ['Katmandú', 'Pokhara', 'Lalitpur', 'Biratnagar', 'Bharatpur', 'Birgunj', 'Dharan', 'Bhaktapur'],
    Afganistán: ['Kabul', 'Herat', 'Kandahar', 'Mazar-e Sharif', 'Jalalabad', 'Kunduz', 'Ghazni', 'Balkh'],
    Marruecos: ['Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tánger', 'Agadir', 'Oujda', 'Kenitra'],
    Argelia: ['Argel', 'Orán', 'Constantina', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif'],
    Túnez: ['Túnez', 'Sfax', 'Susa', 'Bizerta', 'Gabes', 'Ariana', 'Kairuán', 'Gafsa'],
    Libia: ['Trípoli', 'Bengasi', 'Misurata', 'Bayda', 'Zawiya', 'Zliten', 'Khoms', 'Sabha'],
    Ghana: ['Acra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Ashaiman', 'Sunyani', 'Cape Coast', 'Koforidua'],
    'Costa de Marfil': ['Abiyán', 'Bouaké', 'Daloa', 'Yamusukro', 'San Pedro', 'Man', 'Korhogo', 'Gagnoa'],
    Senegal: ['Dakar', 'Saint-Louis', 'Thiès', 'Kaolack', 'Ziguinchor', 'Touba', 'Diourbel', 'Louga'],
    Uganda: ['Kampala', 'Entebbe', 'Gulu', 'Lira', 'Mbarara', 'Jinja', 'Mbale', 'Masaka'],
    Tanzania: ['Dar es Salaam', 'Mwanza', 'Arusha', 'Dodoma', 'Tanga', 'Mbeya', 'Morogoro', 'Zanzíbar']
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const db = getFirestore(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        country: country,
        city: city
      });
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleRegister}>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona un país</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            disabled={!country}
          >
            <option value="" disabled>Selecciona una ciudad</option>
            {country && cities[country].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Introduzca su nombre y apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Introduzca su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
};

