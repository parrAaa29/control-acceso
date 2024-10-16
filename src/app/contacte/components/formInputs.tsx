"use client";
import React, { useState } from 'react';
import { Button, Form, Input, Tag } from 'antd';

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {label}
    {required ? <Tag color="error" className="ml-2">Obligatori</Tag> : <Tag color="warning" className="ml-2">Opcional</Tag>}
  </>
);

const FormComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={customizeRequiredMark}
      className="mt-7"
    >
      <Form.Item
        label="Nom"
        name="nom"  // Asegúrate de asignar un nombre a este campo
        required
        rules={[{ required: true, message: 'Nom és obligatori' }, { min: 1, message: 'Nom ha de tenir almenys 1 caràcter' }]} // Reglas de validación
      >
        <Input placeholder="Nom" />
      </Form.Item>

      <Form.Item
        label="Email / Teléfon"
        name="email"  // Asegúrate de asignar un nombre a este campo
        required
        rules={[{ required: true, message: 'Email / Teléfon és obligatori' }, { min: 1, message: 'Email / Teléfon ha de tenir almenys 1 caràcter' }]} // Reglas de validación
      >
        <Input placeholder="Email / Teléfon" />
      </Form.Item>

      <Form.Item
        name="Missatge"
        label="Missatge"
        rules={[{ required: false, message: 'Escriu un missatge' }]}
      >
        <Input.TextArea showCount maxLength={300} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          className='w-full mt-4'
        >
          Click me!
        </Button>
      </Form.Item>

    </Form>
  );
};

export default FormComponent;
