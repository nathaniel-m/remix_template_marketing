import { CheckIcon } from '@heroicons/react/20/solid'

export default function Pricing({ plansObj, pricingHeading, pricingDescription }) {

  return (
    <div className="my-8 md:mt-24 md:mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-base md:text-base text-gray-700 dark:text-gray-300">
      <div className="">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-4">
          <h1 className="mb-8 text-gray-900 dark:text-gray-300 font-bold text-2xl md:text-3xl">
            Pricing
          </h1>
        </div>

        <p className="mb-4 font-bold">
        {pricingHeading}
        </p>
        <p className="mb-12">
        {pricingDescription}
        </p>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-8 md:grid-cols-2 lg:gap-x-2 lg:grid-cols-4">
          {plansObj.map((plan) => (
            <div
              className='bg-100 dark:bg-gray-800 sm:mx-8 lg:mx-0 lg:rounded-tr-3xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 h-full'
            >
              <h3
                className='text-800 text-base font-semibold leading-7'
              >
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className='text-gray-900 dark:text-gray-300 text-5xl font-semibold tracking-tight'
                >
                  {plan.price ? plan.price : 'FREE'}
                </span>
                <span className='text-gray-700 dark:text-gray-500 text-base'>{plan.price ? "/month" : ''} </span>
              </p>
              <p className='text-gray-700 dark:text-gray-300 mt-6 text-base leading-7'>
                {plan.description}
              </p>
              <ul
                role="list"
                className='text-gray-700 dark:text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10'
              >
                {plan.features.map((feature) => (
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className='text-800 h-6 w-5 flex-none'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


