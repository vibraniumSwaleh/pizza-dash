import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  console.log(order);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  console.log('update');
  return null;
}

export default UpdateOrder;
