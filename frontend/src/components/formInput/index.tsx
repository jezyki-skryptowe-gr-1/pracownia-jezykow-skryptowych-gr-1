import { type HTMLInputTypeAttribute } from 'react';
import { type Path, useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../ui/form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type Props<T> = {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    description?: string;
    disabled?: boolean;
}

const InputField = <T,>({
    name,
    label,
    placeholder,
    description,
    disabled,
    type = 'text'
}: Props<T>) => {
    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='w-full'>
                    {label && <Label htmlFor={name} className='mb-1 font-semibold'>{label}</Label>}
                    <FormControl>
                        <Input
                            {...field}
                            id={name}
                            placeholder={placeholder}
                            type={type}
                            disabled={disabled}
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default InputField