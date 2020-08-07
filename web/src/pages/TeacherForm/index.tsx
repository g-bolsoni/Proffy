import React,{useState, FormEvent} from 'react'
import{ useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assests/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


import './style.css'
import api from '../../services/api';



    function TheacherForm(){
        const history = useHistory();
        const [name,setName] = useState('')
        const [avatar,setAvatar] = useState('')
        const [whatsapp,setWhatsapp] = useState('')
        const [bio,setBio] = useState('')

        const [subject,setSubject] = useState('')
        const [cost,setCost] = useState('')



        
        const [scheduleItens, setScheduleItens] = useState([
            {week_day:0,from:'',to:''}
        ])

        

        function addNewScheduleItem(){
            setScheduleItens([
                ...scheduleItens, 
                {week_day:0,from:'',to:''}
            ]);
        }   
        function handleCreateClass(e:FormEvent){
            e.preventDefault();
            api.post('classes',{
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost:Number(cost),
                schedule: scheduleItens
            }).then(()=>{
                alert('Cadastro realizado com sucesso')
                history.push('/');
            }).catch(()=>{alert('Erro no cadastro')})
            
        }
        function setScheduleItemValue(position:number,field:string, value:string){
            const updateScheduleItens = scheduleItens.map((scheduleItem,index)=>{
                if(index === position){
                    return { ...scheduleItem ,[field] : value}
                }

                return scheduleItem;
            })
            setScheduleItens(updateScheduleItens);

        }
        return(
            <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que vc quer dar aula"
                description="O primeiro passo é preencher esse formulário de inscrição " 
            />


            <main>
                <form onSubmit={handleCreateClass}>
                
                {/*SEUS DADOS */}
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    {/*Avatar*/}
                    <Input name="avatar" label="Avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                    
                    {/*Whatsapp */}
                    <Input name="whatsapp" label="Whatsapp "value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>

                    <Textarea name="bio" label="Biografia"value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
                
                </fieldset>
                
                {/*SOBRE A AULA */}
                <fieldset>
                    <legend> Sobre a aula</legend>
                   
                    <Select 
                        name="subject" 
                        label="Matéria "
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                            {value:'Artes', label:'Artes'},
                            {value:'Biologia', label:'Biologia'},
                            {value:'Ciências', label:'Ciências'},
                            {value:'Educação Fisíca', label:'Educação Fisíca'},
                            {value:'Geografia', label:'Geografia'},
                            {value:'História', label:'História'},
                            {value:'Português', label:'Português'},
                            {value:'Matemática', label:'Matemática'},
                            {value:'Química', label:'Química'},
                        ]}
                    />
                    
                    
                    {/*Avatar*/}
                    <Input name="cost" label="Custo da sua hora por aula " value={cost} onChange={(e)=>{setCost(e.target.value)}}/>                
                </fieldset>
                
                {/*HORARIOS DISPONIVEIS*/}
                <fieldset>
                    <legend>
                        Horarios disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItens.map((scheduleItem,index)=> {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week-day" 
                                    label="Dia da semana "
                                    value={scheduleItem.week_day }
                                    onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)}
                                    options={[
                                        {value:'0', label:'Domingo'},
                                        {value:'1', label:'Segunda-Feira'},
                                        {value:'2', label:'Terça-Feira'},
                                        {value:'3', label:'Quarta-Feira'},
                                        {value:'4 ', label:'Quinta-Feira'},
                                        {value:'5', label:'Sexta-Feira'},
                                        {value:'6', label:'Sabado'},
                                    
                                    ]}
                                />
                        <Input 
                            name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleItem.from }
                            onChange={e=>setScheduleItemValue(index,'from',e.target.value)}

                        />
                        <Input 
                            name="to" 
                            label="Até" 
                            type="time"
                            value={scheduleItem.to}
                            onChange={e=>setScheduleItemValue(index,'to',e.target.value)}
                            
                        />



                    </div>
                        );
                    })}
                   
                </fieldset>

 

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso imortante" />
                        Importante ! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="submit">Salvar Cadastro</button>
                </footer>
                </form>
            </main>
            </div>
        );
    }

export default TheacherForm