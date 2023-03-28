/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/button';
import NavLink from '@/components/link';
import Container from '@/layouts/Container';
import Header from '@/layouts/Header';

const Support = () => {
  return (
    <>
      <Header from="support" />
      <section className="">
        <Container>
          <div className="mb-8 grid grid-cols-2 rounded-b-3xl bg-[#3E5974]">
            <div className="flex flex-col items-center justify-center  text-white">
              <div>
                <h2 className="text-3xl font-semibold lg:text-5xl">
                  Get in touch
                </h2>
                <p className="mt-5 text-base">
                  Want to get in touch? We'd love to hear from you. Here's how
                </p>
                <p>you can reach us...</p>
              </div>
            </div>
            <div className="custom-img rounded-b-3xl"></div>
          </div>
          {/* support call and message */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-white py-8 shadow">
              <div className="space-y-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#414141"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block h-12 w-12 text-[#414141]  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p className="text-base font-semibold text-black">
                  Talk to Sales
                </p>
                <p className="mx-auto w-5/6 text-black">
                  Interested in HubSpot’s software? Just pick up the phone to
                  chat with a member of our sales team.
                </p>
                <div className="pt-5">
                  <NavLink
                    href="tel:+1 877 929 0687"
                    className="cursor-pointer font-semibold text-green-500 hover:underline"
                  >
                    +1 877 929 0687
                  </NavLink>
                </div>
              </div>
            </div>{' '}
            <div className="rounded bg-white py-8 shadow">
              <div className="space-y-5 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#414141"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block h-12 w-12 text-[#414141]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>

                <p className="text-base font-semibold text-black">
                  Contact Customer Support
                </p>
                <p className="mx-auto w-5/6 text-black">
                  Sometimes you need a little help from your friends. Or a
                  HubSpot support rep. Don’t worry… we’re here for you.
                </p>
                <div className="pt-5">
                  <NavLink href="/contact" className="cursor-pointer">
                    <Button>Contact Support</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
