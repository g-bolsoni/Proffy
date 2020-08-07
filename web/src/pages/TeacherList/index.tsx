import React,{Component} from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem' 
import Input from '../../components/Input';
import Select from '../../components/Select';



import './style.css'

class TheacherList extends Component{
    render(){
        return(
            <div id="page-teacher-list" className="container">
                <PageHeader title="Esses são os proffys disponíveis ">
                    <form id="search-teacher">
                        
                       
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
                        <Input type="time"name="time" label="Hora "/>

                       
                       

                    </form>
                </PageHeader>


                <main>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>

                </main>
            </div>
        );
    }
}
export default TheacherList