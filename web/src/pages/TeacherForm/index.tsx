import React,{useState} from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assests/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


import './style.css'



    function TheacherForm(){
        const [scheduleItens, setScheduleItens] = useState([
            {week_day:0,from:'',to:''}
        ])

        

        function addNewScheduleItem(){
            setScheduleItens([
                ...scheduleItens, 
                {week_day:0,from:'',to:''}
            ]);
        }   
        return(
            <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que vc quer dar aula"
                description="O primeiro passo é preencher esse formulário de inscrição " 
            />


            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    {/* Nome Completo */}
                    <Input name="name" label="Nome Completo "/>
                    {/*Avatar*/}
                    <Input name="avatar" label="Avatar "/>
                    
                    {/*Whatsapp */}
                    <Input name="whatsapp" label="Whatsapp "/>

                    <Textarea name="bio" label="Biografia"/>
                
                </fieldset>
                {/*SOBRE AULA */}
                <fieldset>
                    <legend> Sobre a aula</legend>
                    {/* Nome Completo */}
                    <Select 
                        name="subject" 
                        label="Matéria "
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
                    <Input name="cost" label="Custo da sua hora por aula  "/>                
                </fieldset>
                
                
                <fieldset>
                    <legend>
                        Horarios disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItens.map(scheduleItem => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week-day" 
                                    label="Dia da semana "
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
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time"/>



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
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
            </div>
        );
    }

export default TheacherForm