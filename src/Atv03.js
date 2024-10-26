import img1 from './img/YfeOqp2s.jpeg'

function Avatar({person, size, src}){
    return(
        <img 
            className="avatar"
            src={src}
            alt={person.name}
            width={size}
            height={size}
        /> 
    )
}

class exemplo{

    minhaFuncao(){
        alert('oi');
    }

}

export default function Profile(){
    return(
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Nome teste'
                }}
                src={img1}
            />
            <button onClick={this.minhaFuncao}>Meu Botão</button>
        </div>
    );
}