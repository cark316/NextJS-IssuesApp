'use client';

import "easymde/dist/easymde.min.css";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import { TextField, Button } from '@radix-ui/themes';
import { useForm, Controller} from 'react-hook-form';
import { useRouter } from "next/navigation";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form className='max-w-xl space-y-3' 
            onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/issues', data).catch((error)=>{
              if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            });
            router.push('/issues');
        })}>
        <TextField.Root>
            <TextField.Input placeholder='Title' {...register('title')} />
        </TextField.Root>
        <Controller
            name="description"
            control={control}
            render={({ field })=> <SimpleMDE placeholder="Description" {...field} />}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage