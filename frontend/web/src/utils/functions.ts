export const maskCPF = (value: string) => {
  let numericValue = value.replace(/\D/g, '');

  numericValue = numericValue.substring(0, 11);

  return numericValue.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4'
  );
}

export const formatAddress = (
  street: string | undefined,
  number: string | undefined,
  neighborhood: string | undefined,
  postal_code: string | undefined
) => {
  if (!street) return '';

  let formattedStreet = street.trim();

  if (/^rua\s/i.test(formattedStreet)) {
    formattedStreet = formattedStreet.replace(/^rua\s/i, 'R. ');
  } else {
    formattedStreet = `R. ${formattedStreet}`;
  }

  return `${formattedStreet}, ${number} - ${neighborhood}, ${postal_code}`;
};

export const formatDateTimeBR = (dateTime?: string): string => {
  if (!dateTime || typeof dateTime !== 'string') return '';

  try {
    const dateObj = new Date(dateTime);

    if (isNaN(dateObj.getTime())) {
      return '';
    }

    const formatter = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    const formattedDate = formatter.format(dateObj);

    return formattedDate.replace(' ', ' às ');

  } catch (error) {
    console.error('Erro ao formatar a data:', error);
    return '';
  }
};

export function handleBadgeColor(status: string) {
  if (status === 'Em Análise') return "yellow"
  if (status === 'Aceito' || status === 'Encerrado') return "green"
  if (status === 'Recusado') return "red"
  return "green"
}

export function handleTranslate(type: string) {
  if (type === 'report') return "reporte"
  if (type === 'order') return "pedido"
  if (type === 'scheduling') return "agendamento"
}

