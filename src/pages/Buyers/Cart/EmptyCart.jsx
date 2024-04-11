import LinkButton from '../../../components/Cart/LinkButton';

function EmptyCart() {
    return (
        <div className="px-4 py-3">
            <LinkButton to="-1">&larr; Back to previous page</LinkButton>

            <p className="mt-7 font-semibold">
                Your cart is empty. Start adding some products.
            </p>
        </div>
    );
}

export default EmptyCart;