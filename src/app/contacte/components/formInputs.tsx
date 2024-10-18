"use client";
import React, { useState } from 'react';
import { Button, Form, Input, Tag, message } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { supabase } from '@/app/supabaseClient';

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    <span className='mr-2'>
      {label}
    </span>

    {required ? <Tag color="error" className="ml-2">Obligatori</Tag> : <Tag color="warning" className="ml-2">Opcional</Tag>}
  </>
);

const FormComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = async (index: number) => {
    try {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      // Valida y obtiene los valores del formulario
      const values = await form.validateFields();

      // Inserta los datos en la tabla "controlacceso"
      const { data, error } = await supabase
        .from('controlacceso')
        .insert([
          {
            nom: values.nom,
            email: values.email,
            missatge: values.Missatge,
          },
        ]);

      if (error) {
        throw error;
      }

      message.success('Formulario enviado exitosamente');
      form.resetFields(); // Resetea el formulario tras el envío
    } catch (error) {
      // Si la validación falla, muestra mensajes personalizados
      if (error.errorFields) {
        error.errorFields.forEach((fieldError: any) => {
          const { name, errors } = fieldError;
          if (name[0] === 'nom') {
            message.error('El campo "Nom" es obligatorio y debe tener al menos 1 carácter.');
          } else if (name[0] === 'email') {
            message.error('El campo "Email / Teléfon" es obligatorio y debe contener un email válido.');
          }
        });
      } else {
        message.error('Error al enviar el formulario: ' + error.message);
      }
    } finally {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={customizeRequiredMark}
      className="mt-7"
    >
      <FormItem
        label="El teu nom"
        name="nom"
        required
        rules={[
          { required: true, message: 'Nom és obligatori' },
          { min: 1, message: 'Nom ha de tenir almenys 1 caràcter' }
        ]}
      >
        <Input id="name" placeholder="Escriu el teu nom" />
      </FormItem>

      <FormItem
        label="Email / Teléfon"
        name="email"
        required
        rules={[
          { required: true, message: 'Email / Teléfon és obligatori' },
          { type: 'email', message: 'Introdueix un email vàlid' }
        ]}
      >
        <Input id="emailotelefono" placeholder="Escriu el teu email o el teu telèfon" />
      </FormItem>

      <FormItem
        label="Observacions"
        name="Missatge"
        rules={[{ required: false, message: 'Escriu un missatge' }]}
      >
        <TextArea showCount maxLength={300} placeholder="Escriu un missatge, com per exemple, les teves necessitats o el teu horari d'atenció" style={{ resize: 'none' }} />
      </FormItem>

      <FormItem>
        <Button
          type="primary"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          className="w-full mt-4"
        >
          Sol·licitar contacte
        </Button>
      </FormItem>
    </Form>
  );
};

export default FormComponent;
